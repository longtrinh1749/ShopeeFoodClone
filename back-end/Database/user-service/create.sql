create database `user_service`;

use `user_service`;

create table app_user (
    `id` int auto_increment primary key,
    `username` nvarchar(50) unique not null,
    `password` nvarchar(500) not null,
    `authen_token` nvarchar(255),
    `session_id` nvarchar(255),
    `role` nvarchar(20)
);

create table `profile` (
    `user_id` int primary key,
    `address` nvarchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    `district` nvarchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    `city` nvarchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    `email` nvarchar(500),
    `phone` nvarchar(20),
    foreign key (`user_id`) references `app_user`(`id`)
);