import table_parser
from datetime import date, timedelta
from os import path
import json


"""      data.json      """


class Lesson:
    def __init__(self, number, course, day, audi, teacher, group):
        self.number = number
        self.course = course
        self.day = day
        self.audi = audi
        self.teacher = teacher
        self.group = group


def proc():

    data = json.load(open(path.join("excel", "data.json")))
    current_day = date(2019, 12, 30)

    group_sch = dict()
    teacher_sch = dict()
    # data["plan"] - словарь массивов (приложение 1)
    # data["cabs"] - массив классов аудиторий (приложение 2)
    # data["progs"] - массив классов программ (приложение 2)
    # data["teacher"] - массив классов учителей (приложение 2)

    for prog in data["progs"]:  # формируем словарь расписаний групп
        for i in range(int(prog.group)):
            group_sch.update({f"{prog.name}'-'{i+1}": []})

    for teacher in data["teacher"]:  # формируем словарь расписаний учителей
        teacher_sch.update({teacher.name: []})

    while current_day.year < 2021:  # проход по каждому дню
        teach_list = []

        for teacher in data["teacher"]:
            if teacher.is_free(current_day):
                teach_list.append(teacher)

        current_day += timedelta(days=1)
