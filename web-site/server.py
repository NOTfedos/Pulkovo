from flask import Flask, send_from_directory
from flask import render_template, request, redirect, url_for
from os import path
from werkzeug.utils import secure_filename
from algo import proc


UPLOAD_FOLDER = path.join(".", "uploads")
DOWNLOAD_FOLDER = path.join(".", "downloads")
ALLOWED_EXTENSIONS = set(['xls', 'xlsx'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['DOWNLOAD_FOLDER'] = DOWNLOAD_FOLDER


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS


@app.route('/', methods=['POST'])
def index():
    if request.method == 'POST':
        file = request.files['file']
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(path.join(app.config['UPLOAD_FOLDER'], filename))
            return redirect(url_for('result',
                                    filename=filename))
    return render_template('index.html')


@app.route('/result')
def result(res_id):
    proc()
    return send_from_directory(app.config['DOWNLOAD_FOLDER'], filename='result.xlsx')


if __name__ == "__main__":
    app.run(port=1489, host='127.0.0.1')
