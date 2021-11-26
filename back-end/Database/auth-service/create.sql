use shopeefoodclone;

create table AppUser (
id int auto_increment primary key,
username nvarchar(50) unique not null,
password nvarchar(255) not null,
authen_token nvarchar(255), 
session_id nvarchar(255),
role nvarchar(20)
);

create table Profile (
user_id int primary key,
address nvarchar(255),
district nvarchar(20),
city nvarchar(20),
email nvarchar(50),
phone nvarchar(20),
foreign key (user_id) references AppUser(id)
);

