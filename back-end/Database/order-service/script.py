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
roles = ['USER', 'DRIVER', 'SELLER']
districts = 'Hoàn Kiếm, Đống Đa, Ba Đình, Hai Bà Trưng, Hoàng Mai, Thanh Xuân, Long Biên, Nam Từ Liêm, Bắc Từ Liêm, Tây Hồ, Cầu Giấy, Hà Đông'.split(', ')
district = random.choice(districts)
def create_account():
    for i in range (0,120):
        new_account = {
            'username': generate_username(1)[0],
            'password': '123456',
            'name': get_full_name(),
            'gender': random.choice(genders),
            'role': 'DRIVER',
            'address': '{} Tân Mai {} {}'.format(random.randint(1, 300), district, 'Hà Nội'),
            'district': district,
            'city': 'Hà Nội',
            'email': random_email(10),
            'phone': '0859103016'
        }

        res = requests.post(url, json=new_account)
        print(res.text)

# create_account()

def create_script_voucher_owner_shop():
    types = ['SHOP']
    list_variable = []
    for voucher_id in range(1, 16):
        number_of_owner = random.randint(1, 70)
        for _ in range(0, number_of_owner):
            # print("insert into `voucher_owner` values ({}, '{}', {});".format(voucher_id, random.choice(types), random.randint(1,150)))
            new_variable = {'voucher_id': voucher_id, 'type': random.choice(types), 'owner_id': random.randint(1, 121)}
            if new_variable not in list_variable:
                list_variable.append(new_variable)
    for variable in list_variable:
        print("insert into `voucher_owner` values ({}, '{}', {});".format(variable.get('voucher_id'), variable.get('type'), variable.get('owner_id')))

def create_script_voucher_owner_user():
    types = ['USER']
    list_variable = []
    for voucher_id in range(16, 21):
        number_of_owner = random.randint(1, 50)
        for _ in range(0, number_of_owner):
            # print("insert into `voucher_owner` values ({}, '{}', {});".format(voucher_id, random.choice(types), random.randint(1,150)))
            new_variable = {'voucher_id': voucher_id, 'type': random.choice(types), 'owner_id': random.randint(1, 50)}
            if new_variable not in list_variable:
                list_variable.append(new_variable)
    for variable in list_variable:
        print("insert into `voucher_owner` values ({}, '{}', {});".format(variable.get('voucher_id'), variable.get('type'), variable.get('owner_id')))

def create_script_order():
    import uuid
    import mysql.connector
    from mysql.connector import Error
    users = []
    try:
        connection = mysql.connector.connect(host='localhost',
                                            database='user_service',
                                            user='root',
                                            password='root')
        sql_select_Query = "select * from profile"
        cursor = connection.cursor()
        cursor.execute(sql_select_Query)
        # get all records
        records = cursor.fetchall()
        users.extend(records)
        print("Total number of rows in table: ", cursor.rowcount)

        print("\nPrinting each row")
        for row in records:
            print("Id =", row[0], )
            print("Address =", row[4])
            print("District =", row[5])
    except Error as e:
        print("Error while connecting to MySQL", e)
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")

    for status_id in range (1,7):
        for _ in range(1,30):
            customer_id = random.randint(1,50)
            shop_id = random.randint(1,121)
            shipper_id = random.randint(101,150)
            code = str(uuid.uuid4())
            order_hour = random.randint(1,22)
            order_at = '2022-01-{} {}:{}:{}'.format(random.randint(1,5), order_hour, random.randint(0,59), random.randint(0,59))
            delivery_address = 'Số 1 Tân Mai Hoàng Mai Hà Nội'
            delivery_district = 'Hoàng Mai'
            for user in users:
                if user[0] == customer_id:
                    delivery_address = user[4]
                    delivery_district = user[5]
                    break
            delivery_at = ''
            if status_id == 5:
                delivery_at = '2022-01-{} {}:{}:{}'.format(random.randint(1,5), order_hour+1, random.randint(0,59), random.randint(0,59))
            note = 'Nhiều tương ớt'
            shipping_fees = '15000'
            discounts = [20000, 50000, 70000, 15000]
            discount = random.choice(discounts)
            total = 300000
            if delivery_at:
                print("insert into `order` (`status_id`, `customer_id`, `shop_id`, `shipper_id`, `code`, `order_at`, `delivery_address`, `delivery_district`,`delivery_at`, `note`, `shipping_fees`, `discount`, `total`) values ({}, {}, {}, {}, '{}', '{}', '{}', '{}', '{}', '{}', {}, {}, {});".format(status_id, customer_id, shop_id, shipper_id, code, order_at, delivery_address, delivery_district, delivery_at, note, shipping_fees, discount, total))
            else:
                print("insert into `order` (`status_id`, `customer_id`, `shop_id`, `shipper_id`, `code`, `order_at`, `delivery_address`, `delivery_district`,`delivery_at`, `note`, `shipping_fees`, `discount`, `total`) values ({}, {}, {}, {}, '{}', '{}', '{}', '{}', NULL, '{}', {}, {}, {});".format(status_id, customer_id, shop_id, shipper_id, code, order_at, delivery_address, delivery_district, note, shipping_fees, discount, total))

def create_script_order_item():
    import mysql.connector
    from mysql.connector import Error
    items_shop = []
    try:
        connection = mysql.connector.connect(host='localhost',
                                            database='product_service',
                                            user='root',
                                            password='root')
        sql_select_Query = "select item.id, section.shop_id from item, section where item.section_id = section.id;"
        cursor = connection.cursor()
        cursor.execute(sql_select_Query)
        # get all records
        records = cursor.fetchall()
        items_shop.extend(records)
        print("Total number of rows in table: ", cursor.rowcount)

        print("\nPrinting each row")
        for row in records:
            print("Item Id =", row[0])
            print("Shop Id =", row[1])
    except Error as e:
        print("Error while connecting to MySQL", e)
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")
    for order_id in range(1,175):
        appear_shop_id = []
        shop_id = 0
        number_of_item_distinct = random.randint(1,2)
        items = []
        while True:
            while True:
                shop_id = random.randint(1,121)
                if shop_id in appear_shop_id:
                    shop_id = random.randint(1,121)
                else:
                    break
            for item_shop in items_shop:
                if item_shop[1] == shop_id:
                    items.append(item_shop[0])
            if items:
                appear_shop_id.append(shop_id)
                break
        appear_item_ids = []
        for _ in range(1, number_of_item_distinct+1):
            item_id = random.choice(items)
            if item_id in appear_item_ids:
                continue
            else:
                appear_item_ids.append(item_id)
            quantity = random.randint(1,3)
            print("insert into `order_item` (`order_id`, `item_id`, `quantity`) values ({}, {}, {});".format(order_id, item_id, quantity))

create_script_order_item()