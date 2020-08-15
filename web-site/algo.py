import table_parser
from datetime import date, timedelta
from os import path
import json


"""      data.json      """


def proc():
    data = json.load(open(path.join("excel", "data.json")))
    current_day = date(2019, 12, 30)

    ans = []

    # data["plan"] - словарь массивов (приложение 1)
    # data["cabs"] - массив классов аудиторий (приложение 2)
    # data["progs"] - массив классов программ (приложение 2)
    # data["teacher"] - массив классов учителей (приложение 2)

    for prog in data["progs"]:


    while current_day.year < 2021:
        teach_list = []
        for group in grops
        for teacher in data["teacher"]:
            if teacher.is_free(current_day):
                teach_list.append(teacher)
        if current_day.weekday() == 6:

        current_day += timedelta(days=1)

