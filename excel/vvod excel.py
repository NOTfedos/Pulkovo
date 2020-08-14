import openpyxl

#----------------------------------------------------------
class Program(object):   
    def __init__(self, arg):
        self.num = num
        self.disp = disp 
        self.spes = spes #особенности
        self.time = time
        self.time_sdo = time_sdo
        self.days = days
        self.group = group
        self.people = people
        self.people_vn = people_vn
        self.teach = teach
        self.aud = aud
        self.skelet = skelet
        

def pars_lessons(ind,file_1):
    return list(map(lambda s: s.value, file_1['I'+str(ind):'DK'+str(ind)][0][::2]))

def pars_disp(ind,file_1):
    last = file_1['E'+str(ind)].value

    disps = {}

    while (file_1['G'+str(ind)].value != None) and ((file_1['E'+str(ind)].value == None) or (file_1['E'+str(ind)].value == last)):
        disps[file_1['G'+str(ind)].value] = pars_lessons(ind,file_1)
        ind += 2
    return (ind, disps)


#----------------------------------------------------------
file_1 = openpyxl.load_workbook('Приложение №1.xlsx')['ДПО']

pers = {}

offset_1 = 6

index = 6

while (file_1['E'+str(index)].value != None):
    name = file_1['E'+str(index)].value
    index, pers[name] = pars_disp(index, file_1)


del file_1

#----------------------------------------------------------
file_2 = openpyxl.load_workbook('Приложение №2.xlsx')
#---------------
file_auds = file_auds['параметры аудиторий']

while (file_auds['A'+str(index)].value != None):
    number = file_auds['A'+str(index)].value
    space = file_auds['B'+str(index)].value

#--------
file_programs = file_2['параметры программ']
index = 2

while (file_programs['A'+str(index)].value != None):
    name = file_programs['C'+str(index)].value
    