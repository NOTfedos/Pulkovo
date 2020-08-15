import string
from flask import Flask, send_from_directory
from flask import render_template, request, redirect, url_for
from os import path, listdir
from werkzeug.utils import secure_filename
from openpyxl import load_workbook
from itertools import product
from json import dumps

# from algo import proc
import webbrowser

UPLOAD_FOLDER = path.join(".", "uploads")
DOWNLOAD_FOLDER = path.join(".", "downloads")
ALLOWED_EXTENSIONS = {'xlsx'}  # openpyxl поддерживает формат xlsx

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['DOWNLOAD_FOLDER'] = DOWNLOAD_FOLDER


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS


def get_tabs():
    pool = listdir('uploads')
    return [(i, f'application{i}.xlsx' in pool or f'application{i}.xls' in pool) for i in range(1, 6)]


def get_alp(n):
    limit, digits = 1, 0
    while n >= limit:
        digits += 1
        limit *= 26
    alp = list()
    for prod in product(' ' + string.ascii_uppercase, repeat=digits):
        if n >= 0:
            alp.append(''.join(prod))
            n -= 1
        else:
            break
    return alp


@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        for i in range(1, 6):
            try:
                file = request.files[f'application{i}']
            except KeyError:
                continue
            if file and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                file.save(path.join(app.config['UPLOAD_FOLDER'], f'application{i}.{filename.rsplit(".", 1)[1]}'))
    tabs = get_tabs()
    return render_template('index.html', tabs=tabs, ready=all(map(lambda x: x[1],tabs)))


@app.route('/result')
def result():
    # proc()
    return send_from_directory(app.config['DOWNLOAD_FOLDER'], filename='result.xlsx')


@app.route('/table/<num>')
def table(num):
    filename = [filename for filename in listdir('uploads') if filename.startswith(f'application{num}')][0]
    workbook = load_workbook(path.join('uploads', filename))
    sheet = workbook.worksheets[0]
    data = [[cell for cell in row] for row in sheet.rows]
    return render_template('table.html', data=data, alp=get_alp(len(data[0])))


def upload(**kwargs):
    pass


@app.route('/api', methods=['POST', 'GET'])
def api():
    return dumps({
        'test': lambda **kwargs: {'result': 'ok'},
        'upload': upload,
    }[request.args['action']](**request.args))


if __name__ == "__main__":
    debug = True
    if not debug:
        webbrowser.open('http://localhost:1489')
    app.run(port=1489, host='127.0.0.1', debug=debug)
