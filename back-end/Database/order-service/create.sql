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
    `discount` decimal(16,0) not null,
    `limit_price` decimal(16,0) not null,
    `description` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci not null,
    `expired` datetime not null
);

create table `voucher_appliance` (
	`voucher_id` int not null,
    `apply_type` varchar(20) not null,
    `apply_to_id` int not null,
	primary key (`voucher_id`, `apply_type`, `apply_to_id`),
    foreign key (`voucher_id`) references `voucher`(`id`)
);

create table `orders` (
    `id` int auto_increment primary key,
    `status_id` int not null,
    `customer_id` int not null,
    `shop_id` int not null,
    `shipper_id` int,
    `code` varchar(100) not null,
    `order_at` datetime not null,
    `delivery_address` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci not null,
    `delivery_district` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci not null,
    `delivery_at` datetime,
    `note` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    `shipping_fees` decimal(16,0),
    `discount` decimal(16,0) not null,
    `total` decimal(16,0) not null,
    foreign key (`status_id`) references `status`(`id`)
);

create table `sales` (
    `order_id` int not null,
    `item_id` int not null,
    `quantity` int not null,
    primary key (`order_id`, `item_id`),
    foreign key (`order_id`) references `orders`(`id`)
);