import io
import random
with io.open('product-service/tmp.txt','r',encoding='utf8') as f:
    lines = f.readlines()
    for line in lines:
        line = line.split('values (')
        int = random.randint(51,100)
        line[0] = line[0] + f"values ('{int}', "
        line = line[0] + line[1]
        print(line)