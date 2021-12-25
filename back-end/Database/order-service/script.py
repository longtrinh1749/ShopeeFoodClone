import requests
from random_username.generate import generate_username
import random
import string
import time

def random_email(char_num):
    return ''.join(random.choice(string.ascii_letters) for _ in range(char_num)) + "@gmail.com"

def get_full_name():
    import random
    last_names = ['Nguyễn', 'Trịnh', 'Trần', 'Lê', 'Phạm', 'Huỳnh', 'Phan', 'Đào']
    middle_names = ['Minh', 'Thị', 'Quốc', 'Đăng', 'Phúc', 'Ngọc', 'Văn', 'Phong', 'Hữu']
    first_names = ['Ái', 'An', 'Bạch', 'Biên', 'Cảnh', 'Chân', 'Long', 'Thành', 'Tùng', 'Minh', 'Thái', 'Đức']

    return random.choice(last_names) + ' ' + random.choice(middle_names) + ' ' + random.choice(first_names)

url = 'http://localhost:8400/v1/public/register'

genders = ['male', 'female']
roles = ['USER', 'SELLER', 'DRIVER']
districts = 'Hoàn Kiếm, Đống Đa, Ba Đình, Hai Bà Trưng, Hoàng Mai, Thanh Xuân, Long Biên, Nam Từ Liêm, Bắc Từ Liêm, Tây Hồ, Cầu Giấy, Hà Đông'.split(', ')
def create_account():
    for i in range (0,49):
        new_account = {
            'username': generate_username(1)[0],
            'password': '123456',
            'name': get_full_name(),
            'gender': random.choice(genders),
            'role': 'DRIVER',
            'address': '{} Tân Mai {} {}'.format(random.randint(1, 300), random.choice(districts), 'Hà Nội'),
            'district': random.choice(districts),
            'city': 'Hà Nội',
            'email': random_email(10),
            'phone': '0859103016'
        }

        res = requests.post(url, json=new_account)
        print(res.text)
        time.sleep(0.1)

def create_script_voucher_owner():
    types = ['SHOP', 'USER']
    list_variable = []
    for voucher_id in range(1, 16):
        number_of_owner = random.randint(1, 70)
        for _ in range(0, number_of_owner):
            # print("insert into `voucher_owner` values ({}, '{}', {});".format(voucher_id, random.choice(types), random.randint(1,150)))
            new_variable = {'voucher_id': voucher_id, 'type': random.choice(types), 'owner_id': random.randint(1, 150)}
            if new_variable not in list_variable:
                list_variable.append(new_variable)
    for variable in list_variable:
        print("insert into `voucher_owner` values ({}, '{}', {});".format(variable.get('voucher_id'), variable.get('type'), variable.get('owner_id')))

create_script_voucher_owner()