create database `order_service`;

use order_service;

create table `status` (
    `id` int auto_increment primary key,
    `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci not null
)

create table `order` (
    `id` int auto_increment primary key,
    `status_id` int not null,
    `customer_id` int not null,
    `shipper_id` int not null,
    `order_at` datetime not null,
    `delivery_at` datetime,
    foreign key (`status_id`) references `status`(`id`)
)

create table `order_item` (
    `order_id` int not null,
    `item_id` int not null,
    `quantity` int not null,
    primary key (`order_id`, `item_id`),
    foreign key (`order_id`) references `order`(`id`)
)