# import table_parser
from datetime import date, timedelta
from os import path
import json
from typing import Dict, List, Union
import vvod_excel as data
from vvod_excel import Aud, Program, Teacher


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
    current_day = date(2019, 12, 30)

    group_schedule = dict()
    teacher_schedule = dict()
    plan: Dict[str, List] = data.disp  # - словарь массивов (приложение 1)
    auditoriums: List[Aud] = data.audit  # - массив классов аудиторий (приложение 2)
    programs: List[Program] = data.progs  # - массив классов программ (приложение 2)
    teachers: List[Teacher] = data.teachers  # - массив классов учителей (приложение 2)
    for program in programs:  # формируем словарь расписаний групп
        if program.group is None:
            print(f'No data for {program.name}')
            continue
        for i in range(int(program.group)):
            group_schedule.update({Group(program): dict()})

    for teacher in teachers:  # формируем словарь расписаний учителей
        teacher_schedule.update({teacher: dict()})

    # ----------------------------- КОНЕЦ ИНИЦИАЛИЗАЦИИ ---------------------------------

    while current_day.year < 2021:  # проход по каждому дню
        for i in range(4):

            if i == 0:
                for group in group_schedule.keys():  # добавляем текущий день в расписание группы
                    group_schedule[group].update({current_day: []})

            for group in group_schedule.keys():
                program = group.prog
                if program.index <= len(program.skelet):  # если группа ещё не прошла программу
                    # ищем преподавателей на эту программу
                    program.index += 1

        current_day += timedelta(days=1)


if __name__ == '__main__':
    proc()
