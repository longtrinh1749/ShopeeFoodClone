create database `product_service`;

use `product_service`;

create table `shop` (
    `id` int auto_increment primary key,
    `name` nvarchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci not null,
    `img_url` nvarchar(500),
    `address` nvarchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci not null,
    `district` nvarchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci not null,
    `city` nvarchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci not null,
    `price_range` nvarchar(100)
);

create table `category` (
    `id` int auto_increment primary key,
    `name` nvarchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci not null
);

create table `shop_category` (
    `shop_id` int,
    `category_id` int,
    primary key (`shop_id`, `category_id`),
    foreign key (`shop_id`) references shop(id),
    foreign key (`category_id`) references category(id)
);

create table `section` (
    `id` int auto_increment primary key,
    `shop_id` int,
    `name` nvarchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci not null,
    foreign key (`shop_id`) references `shop`(`id`)
)

create table `item` (
    `id` int auto_increment primary key,
    `section_id` int not null,
    `name` nvarchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci not null,
    `img_url` nvarchar(255),
    `description` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci nvarchar(500),
    `price` decimal(16,0) not null,
    `sale` int not null,
    `status` bit(1) not null
)

create table `item_audit` (
    `id` int auto_increment primary key,
    `update_at` datetime not null,
    `price` int not null,
    `sale` int not null
)