create database `order_service`;

use order_service;

create table `status` (
    `id` int auto_increment primary key,
    `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci not null
);

create table `voucher` (
    `id` int auto_increment primary key,
    `code` varchar(50) not null,
    `discount` int not null,
    `limit_price` int not null,
    `description` nvarchar(255) not null,
    `expired` datetime not null,
    `type` varchar(20) not null,
    `owner_id` int not null
)

create table `order` (
    `id` int auto_increment primary key,
    `voucher_id` int,
    `status_id` int not null,
    `customer_id` int not null,
    `shop_id` int not null,
    `shipper_id` int,
    `code` varchar(50) not null,
    `order_at` datetime not null,
    `delivery_address` nvarchar(255) not null,
    `delivery_at` datetime,
    `note` text,
    `shipping_fees` int,
    `total` int not null,
    foreign key (`status_id`) references `status`(`id`),
    foreign key (`customer_id`) references `voucher`(`id`)
);

create table `order_item` (
    `order_id` int not null,
    `item_id` int not null,
    `quantity` int not null,
    primary key (`order_id`, `item_id`),
    foreign key (`order_id`) references `order`(`id`)
);