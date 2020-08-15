import table_parser
from os import path
import json


"""      data.json      """


def proc():
    data = json.load(open(path.join("excel", "data.json")))
    # data["plan"] - словарь массивов (приложение 1)
    # data["cabs"] - массив классов аудиторий (приложение 2)
    # data["progs"] - массив классов программ (приложение 2)
    # data["teacher"] - массив классов учителей (приложение 2)


