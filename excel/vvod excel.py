import openpyxl

def pars_lessons(ind,file_1):
    return list(map(lambda s: s.value, file_1['I'+str(ind):'DK'+str(ind)][0][::2]))

def pars_disp(ind,file_1):
    last = file_1['E'+str(ind)].value

    disps = {}

    while (file_1['G'+str(ind)].value != None) and ((file_1['E'+str(ind)].value == None) or (file_1['E'+str(ind)].value == last)):
        disps[file_1['G'+str(ind)].value] = pars_lessons(ind,file_1)
        ind += 2
    return (ind, disps)



file_1 = openpyxl.load_workbook('Приложение №1.xlsx')['ДПО']

pers = {}

offset_1 = 6

index = 6

while (file_1['E'+str(index)].value != None):
    name = file_1['E'+str(index)].value
    index, pers[name] = pars_disp(index, file_1)
    print(index)


