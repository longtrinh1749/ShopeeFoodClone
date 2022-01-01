import io
import random
with io.open('product-service/tmp.txt','r',encoding='utf8') as f:
    lines = f.readlines()
    i = 100
    for line in lines:
        i += 1
        line = line.split('values (')
        int = i
        line[0] = line[0] + f"values ('{int}', "
        line = line[0] + line[1]
        print(line)