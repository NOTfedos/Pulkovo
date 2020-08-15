import table_parser
from datetime import date, timedelta
from os import path
import json


"""      data.json      """


class Lesson:
    def __init__(self, number, course, day, aud, teacher, group):
        self.number = number
        self.course = course
        self.day = day
        self.aud = aud
        self.teacher = teacher
        self.group = group


class Group:
    def __init__(self, prog):
        self.prog = prog
        self.sch = dict()


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
            group_sch.update({Group(prog): dict()})

    for teacher in data["teacher"]:  # формируем словарь расписаний учителей
        teacher_sch.update({teacher: dict()})


    # ----------------------------- КОНЕЦ ИНИЦИАЛИЗАЦИИ ---------------------------------


    while current_day.year < 2021:  # проход по каждому дню
        for i in range(4):

            if i == 0:
                for group in group_sch.keys(): # добавляем текущий день в расписание группы
                    group_sch[group].update({current_day: []})

            for group in group_sch.keys():
                prog = group.prog
                if prog.index <= len(prog.skelet):  # если группа ещё не прошла программу

                    prog.index += 1



        current_day += timedelta(days=1)
