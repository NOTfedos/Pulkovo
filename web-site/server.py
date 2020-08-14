from flask import Flask, send_from_directory
from flask import render_template, request, redirect, url_for
from os import path
from werkzeug.utils import secure_filename
# from algo import proc
import webbrowser


UPLOAD_FOLDER = path.join(".", "uploads")
DOWNLOAD_FOLDER = path.join(".", "downloads")
ALLOWED_EXTENSIONS = {'xls', 'xlsx'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['DOWNLOAD_FOLDER'] = DOWNLOAD_FOLDER


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS


@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        for i in range(1, 6):
            file = request.files[f'application{i}']
            if file and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                file.save(path.join(app.config['UPLOAD_FOLDER'], filename))
    return render_template('index.html')


@app.route('/result')
def result():
    # proc()
    return send_from_directory(app.config['DOWNLOAD_FOLDER'], filename='result.xlsx')


if __name__ == "__main__":
    webbrowser.open('http://localhost:1489')
    app.run(port=1489, host='127.0.0.1', debug=True)
