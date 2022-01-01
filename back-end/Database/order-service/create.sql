-- drop database `order_service`;
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
    `expired` datetime not null
);

create table `voucher_appliance` (
	`voucher_id` int not null,
    `apply_type` varchar(20) not null,
    `apply_to_id` int not null,
	primary key (`voucher_id`, `apply_type`, `apply_to_id`),
    foreign key (`voucher_id`) references `voucher`(`id`)
);

create table `order` (
    `id` int auto_increment primary key,
    `status_id` int not null,
    `customer_id` int not null,
    `shop_id` int not null,
    `shipper_id` int,
    `code` varchar(50) not null,
    `order_at` datetime not null,
    `delivery_address` nvarchar(255) not null,
    `delivery_district` nvarchar(50) not null,
    `delivery_at` datetime,
    `note` text,
    `shipping_fees` int,
    `discount` int not null,
    `total` int not null,
    foreign key (`status_id`) references `status`(`id`)
);

create table `order_item` (
    `order_id` int not null,
    `item_id` int not null,
    `quantity` int not null,
    primary key (`order_id`, `item_id`),
    foreign key (`order_id`) references `order`(`id`)
);