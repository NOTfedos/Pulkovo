import string
from flask import Flask, send_from_directory
from flask import render_template, request
from flask_cors import CORS
from os import path, listdir
from werkzeug.utils import secure_filename
from openpyxl import load_workbook
from itertools import product, chain
from json import dumps
from algo import proc
from logging import getLogger, DEBUG
import webbrowser
logger = getLogger('flask_cors')
logger.level = DEBUG




UPLOAD_FOLDER = path.join(".", "uploads")
DOWNLOAD_FOLDER = path.join(".", "downloads")
ALLOWED_EXTENSIONS = {'xlsx', 'zip'}  # openpyxl поддерживает формат xlsx

app = Flask(__name__, static_folder='./client/build', static_url_path='/')
CORS(app)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['DOWNLOAD_FOLDER'] = DOWNLOAD_FOLDER


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS


def get_tabs():
    pool = listdir('uploads')
    return [(i, f'application{i}.xlsx' in pool or f'application{i}.zip' in pool) for i in range(1, 6)]


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
    return app.send_static_file('index.html')


@app.route('/result')
def result():
    done = proc()


    return send_from_directory(app.config['DOWNLOAD_FOLDER'], filename='result.xlsx')


@app.route('/table/<num>')
def table(num):
    pth = 'uploads'
    if num == 0:
        return ''
    try:
        if num != 'result':
            filename = [filename for filename in listdir('uploads') if filename.startswith(f'application{num}')][0]
    except IndexError:
        return ''
    if num == 'result':
        filename = 'result.xlsx'
        pth = 'downloads'
    workbook = load_workbook(path.join(pth, filename))
    sheet = workbook.worksheets[0]
    data = [[cell for cell in row] for row in sheet.rows]
    return render_template('table.html', data=data, alp=get_alp(len(data[0])))


@app.route('/zip/3')
def zip():
    try:
        filename = [filename for filename in listdir('uploads') if filename.startswith(f'application3')][0]
    except IndexError:
        return ''

    return render_template('zip.html', data='zip')


def download(**_):
    try:
        done = proc()
    except Exception as e:
        print(e)
    return {'fileUrl': 'http://localhost:3001/table/result'}


def upload(**_):
    r = 0
    for i in range(1, 6):
        try:
            file = request.files[f'application{i}']
        except KeyError:
            continue
        if file and allowed_file(file.filename):
            r = i
            filename = secure_filename(file.filename)
            file.save(path.join(app.config['UPLOAD_FOLDER'], f'application{i}.{filename.rsplit(".", 1)[1]}'))
            if filename.endswith('.zip'):
                return {"fileUrl": "http://localhost:3001/zip/3"}
    return {"fileUrl": f"http://localhost:3001/table/{r}"} if r != 0 else None


@app.route('/api/<method>', methods=['POST', 'GET'])
def api(method):
    return dumps({
        'test': lambda **kwargs: {'result': 'ok'},
        'upload': upload,
        'download': download
    }[method](**request.args))



if __name__ == "__main__":
    debug = True
    if not debug:
        webbrowser.open('http://localhost:3001')
    app.run(port=3001, host='127.0.0.1', debug=debug)
