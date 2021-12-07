create database `product_service`;

use `product_service`;

create table `shop` (
    `id` int auto_increment primary key,
    `name` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci not null,
    `img_url` varchar(500) not null,
    `address` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci not null,
    `district` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci not null,
    `city` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci not null,
    `price_range` varchar(100)
);

create table `category` (
    `id` int auto_increment primary key,
    `name` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci not null
);

create table `shop_category` (
    `shop_id` int,
    `category_id` int,
    primary key (`shop_id`, `category_id`),
    foreign key (`shop_id`) references `shop`(`id`),
    foreign key (`category_id`) references `category`(`id`)
);

create table `section` (
    `id` int auto_increment primary key,
    `shop_id` int,
    `name` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci not null,
    `deleted` bit(1) not null,
    foreign key (`shop_id`) references `shop`(`id`)
);

create table `item` (
    `id` int auto_increment primary key,
    `section_id` int not null,
    `name` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci not null,
    `img_url` varchar(255) not null,
    `description` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    `price` decimal(16,0) not null,
    `sale` int not null,
    `deleted` bit(1) not null,
    foreign key (`section_id`) references `section`(`id`)
);

create table `item_audit` (
    `id` int auto_increment primary key,
    `item_id` int not null,
    `update_at` datetime not null,
    `price` decimal(16,0) not null,
    `sale` int not null,
    foreign key (`item_id`) references `item`(`id`)
);
