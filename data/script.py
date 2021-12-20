
with open('voucher.txt', 'r',  encoding="utf8") as f:
    lines = f.readlines()
    for line in lines:
        row = line.split(', ')
        row[3] = row[3] + ', ' + row[4]
        row[4] = row[5].split('\n')[0]
        time = row[4].split('/')
        if len(time[0]) == 1:
            time[0] = '0' + time[0]
        if len(time[1]) == 1:
            time[1] = '0' + time[1]
        row[4] = '{}-{}-{} 00:00:00'.format(time[2], time[1], time[0])
        print("insert into `voucher` values ('{}', {}, {}, '{}', '{}', 'USER', 0;".format(row[0], row[1], row[2], row[3], row[4]))
