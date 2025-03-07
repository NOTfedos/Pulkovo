from typing import Dict
from vvod_excel import Teacher, Aud, Program

program_indexer: Dict[str, str] = {
    'Авиационная безопасность': 'Досмотр',
    # ...
}

teacher_indexer: Dict[str, str] = {
    'Авиационная безопасность': 'Досмотр',
    # ...
}

auditorium_indexer: Dict[str, str] = {
    'Авиационная безопасность': 'Досмотр',
    # ...
}


def discipline(element):
    if isinstance(element, Program):
        return program_indexer.get(element.disp, '')
    elif isinstance(element, Teacher):
        return teacher_indexer.get(element.disp, '')
    elif isinstance(element, Aud):
        return auditorium_indexer.get(element.priority, '')


program_specialise: Dict[str, str] = {
    'Программа повышения квалификации «Предполётный досмотр пассажиров, членов экипажей гражданских судов, '
    'обслуживающего персонала, ручной клади, багажа, грузов, почты и бортовых запасов»':
        'Программа повышения квалификации',
    'Программа повышения квалификации «Перронный контроль и досмотр воздушных судов»':
        'Программа повышения квалификации',
    'Программа повышения квалификации «Предотвращение несанкционированного доступа в контролируемую зону аэропорта»':
        'Программа повышения квалификации',
    'Программа повышения квалификации «Перевозка опасных грузов воздушным транспортом.12 категория ИКАО/ИАТА"':
        'Программа повышения квалификации',

    'Программа начальной подготовки «Предполётный досмотр пассажиров, членов экипажей гражданских судов, '
    'обслуживающего персонала, ручной клади, багажа, грузов, почты и бортовых запасов»':
        'Специальная профессиональная подготовка',
    'Программа специальной профессиональной подготовки «Предполётный досмотр пассажиров, членов экипажей гражданских '
    'судов, обслуживающего персонала, ручной клади, багажа, грузов, почты и бортовых запасов»':
        'Специальная профессиональная подготовка',
    'Программа начальной подготовки «Перронный контроль и досмотр воздушных судов»':
        'Специальная профессиональная подготовка',
    'Программа специальной профессиональной подготовки «Перронный контроль и досмотр воздушных судов»':
        'Специальная профессиональная подготовка',
    'Программа начальной подготовки «Предотвращение несанкционированного доступа в контролируемую зону аэропорта»':
        'Специальная профессиональная подготовка',
    'Программа специальной профессиональной подготовки  «Предотвращение несанкционированного доступа в контролируемую '
    'зону аэропорта»':
        'Специальная профессиональная подготовка',
    # ...
}


def speciality(element):
    if isinstance(element, Program):
        return program_specialise[element.name]
    elif isinstance(element, Teacher):
        return teacher_indexer.get(element.priority, 'Досмотр')
    elif isinstance(element, Aud):
        return auditorium_indexer[element.priority]


indexer: Dict[str, int] = {
    'центровка и контроль загрузки вс. базовый курс': 1,
    'центровка и контроль загрузки вс': 2,
    'охрана аэропорта': 3,
    'безопасность полетов': 4,
    'опасные грузы. 10 категория. базовый курс': 7,
    'опасные грузы. 10 категория': 8,
    'опасные грузы. 9 категория. базовый курс': 9,
    'опасные грузы. 9 категория': 10,
    'опасные грузы. 8 категория. базовый курс': 11,
    'опасные грузы. 8 категория': 12,
    'пассажирские перевозки': 13,
    'пассажирские перевозки. базовый курс': 14,
    'организация наземного обслуживания вс. базовый курс': 15,
    'организация наземного обслуживания вс': 16,
    'досмотр': 32,
    'досмотр. специальная профессиональная подготовка': 31,
    'перронный контроль': 35,
    'перронный контроль. специальная профессиональная подготовка': 34,
}

out_indexer: Dict[int, str] = dict()

for key in indexer.keys():
    out_indexer.update({indexer[key]: key})
