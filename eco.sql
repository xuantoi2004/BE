/*
 Navicat Premium Data Transfer

 Source Server         : xampp
 Source Server Type    : MySQL
 Source Server Version : 100428 (10.4.28-MariaDB)
 Source Host           : localhost:3307
 Source Schema         : eco

 Target Server Type    : MySQL
 Target Server Version : 100428 (10.4.28-MariaDB)
 File Encoding         : 65001

 Date: 27/03/2024 00:12:27
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(600) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `picture` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `active` tinyint NOT NULL DEFAULT 1,
  `goodCategoryId` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK_d75549613c2ae44496853c6de26`(`goodCategoryId` ASC) USING BTREE,
  CONSTRAINT `FK_d75549613c2ae44496853c6de26` FOREIGN KEY (`goodCategoryId`) REFERENCES `goods_category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('2024-03-26 23:17:56.628000', '2024-03-26 23:17:56.628000', NULL, 1, 'Giày Trunky', 'Giày Trunky', '/img/default.jpg', 1, 1);

-- ----------------------------
-- Table structure for customer
-- ----------------------------
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer`  (
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `lastName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `nation1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `city1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `address1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `district1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `nation2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `city2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `address2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `district2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `jcoin` int NOT NULL DEFAULT 0,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `isAdmin` tinyint NOT NULL DEFAULT 0,
  `active` tinyint NOT NULL DEFAULT 1,
  `gender` tinyint NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of customer
-- ----------------------------
INSERT INTO `customer` VALUES ('2024-03-17 23:31:23.211000', '2024-03-26 22:54:18.000000', NULL, 1, 'Đức', 'Thắng', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', '113', 'admin@admin.com', 'null', 0, 'admin', 1, 1, 1);

-- ----------------------------
-- Table structure for goods_category
-- ----------------------------
DROP TABLE IF EXISTS `goods_category`;
CREATE TABLE `goods_category`  (
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `goodName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `picture` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods_category
-- ----------------------------
INSERT INTO `goods_category` VALUES ('2024-03-26 23:10:46.634000', '2024-03-26 23:12:22.000000', NULL, 1, 'Giày thể thao', 'Giày thể thao', 'https://i.imgur.com/9qEXutu.png');

-- ----------------------------
-- Table structure for invoice
-- ----------------------------
DROP TABLE IF EXISTS `invoice`;
CREATE TABLE `invoice`  (
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `nation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `district` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `shipping` int NOT NULL DEFAULT 1,
  `payment` int NOT NULL DEFAULT 1,
  `total` int NOT NULL,
  `status` enum('1','2','0') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '1',
  `customerId` int NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK_925aa26ea12c28a6adb614445ee`(`customerId` ASC) USING BTREE,
  CONSTRAINT `FK_925aa26ea12c28a6adb614445ee` FOREIGN KEY (`customerId`) REFERENCES `customer` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of invoice
-- ----------------------------

-- ----------------------------
-- Table structure for invoice_child
-- ----------------------------
DROP TABLE IF EXISTS `invoice_child`;
CREATE TABLE `invoice_child`  (
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `qty` int NOT NULL DEFAULT 1,
  `total` int NOT NULL,
  `productId` int NULL DEFAULT NULL,
  `invoiceId` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK_076c4f08a3e421d44878978d2af`(`productId` ASC) USING BTREE,
  INDEX `FK_2de8bf244406b73bffbf01b123f`(`invoiceId` ASC) USING BTREE,
  CONSTRAINT `FK_076c4f08a3e421d44878978d2af` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_2de8bf244406b73bffbf01b123f` FOREIGN KEY (`invoiceId`) REFERENCES `invoice` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of invoice_child
-- ----------------------------

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `timestamp` bigint NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES (1, 1694687042057, 'InitDB1694687042057');
INSERT INTO `migrations` VALUES (2, 1694689083943, 'AddRelationCustomerInvoice1694689083943');
INSERT INTO `migrations` VALUES (3, 1694764939204, 'ChangeTypePhoneInvoice1694764939204');

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order`  (
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `orderNumber` int NOT NULL,
  `orderDate` datetime NOT NULL,
  `requiredDate` datetime NOT NULL,
  `transactStatus` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `paid` int NOT NULL,
  `paidDate` datetime NOT NULL,
  `fulfilled` tinyint NOT NULL DEFAULT 0,
  `deleted` tinyint NOT NULL DEFAULT 0,
  `customerId` int NULL DEFAULT NULL,
  `paymentId` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `REL_124456e637cca7a415897dce65`(`customerId` ASC) USING BTREE,
  UNIQUE INDEX `REL_9ad13532f48db4ac5a3b3dd70e`(`paymentId` ASC) USING BTREE,
  CONSTRAINT `FK_124456e637cca7a415897dce659` FOREIGN KEY (`customerId`) REFERENCES `customer` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_9ad13532f48db4ac5a3b3dd70e5` FOREIGN KEY (`paymentId`) REFERENCES `payment` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order
-- ----------------------------

-- ----------------------------
-- Table structure for orderdetail
-- ----------------------------
DROP TABLE IF EXISTS `orderdetail`;
CREATE TABLE `orderdetail`  (
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `finalPrice` int NOT NULL,
  `finalTotalPrice` int NOT NULL,
  `billDate` datetime NOT NULL,
  `shipDate` datetime NOT NULL,
  `fulfilled` tinyint NOT NULL DEFAULT 0,
  `orderId` int NULL DEFAULT NULL,
  `shipperId` int NULL DEFAULT NULL,
  `productId` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `REL_aa8ab952b0b4cead542acbe18e`(`shipperId` ASC) USING BTREE,
  UNIQUE INDEX `REL_ed57365b5815a7e0b94f8c5421`(`productId` ASC) USING BTREE,
  INDEX `FK_c2354396f8361da558b647ed342`(`orderId` ASC) USING BTREE,
  CONSTRAINT `FK_aa8ab952b0b4cead542acbe18e7` FOREIGN KEY (`shipperId`) REFERENCES `shipper` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_c2354396f8361da558b647ed342` FOREIGN KEY (`orderId`) REFERENCES `order` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_ed57365b5815a7e0b94f8c54217` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orderdetail
-- ----------------------------

-- ----------------------------
-- Table structure for payment
-- ----------------------------
DROP TABLE IF EXISTS `payment`;
CREATE TABLE `payment`  (
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `paymentName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(600) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `allowed` tinyint NOT NULL DEFAULT 0,
  `supplierId` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK_a3772a91be111b4b6a8a496fffa`(`supplierId` ASC) USING BTREE,
  CONSTRAINT `FK_a3772a91be111b4b6a8a496fffa` FOREIGN KEY (`supplierId`) REFERENCES `supplier` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of payment
-- ----------------------------

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `picture` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `price` int NOT NULL,
  `discount` int NOT NULL,
  `discountAvailable` tinyint NOT NULL DEFAULT 0,
  `qty` int NOT NULL DEFAULT 0,
  `productAvailable` tinyint NOT NULL DEFAULT 1,
  `isFlashsale` tinyint NOT NULL DEFAULT 0,
  `isTrending` tinyint NOT NULL DEFAULT 0,
  `supplierId` int NOT NULL,
  `categoryId` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK_4346e4adb741e80f3711ee09ba4`(`supplierId` ASC) USING BTREE,
  INDEX `FK_ff0c0301a95e517153df97f6812`(`categoryId` ASC) USING BTREE,
  CONSTRAINT `FK_4346e4adb741e80f3711ee09ba4` FOREIGN KEY (`supplierId`) REFERENCES `supplier` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_ff0c0301a95e517153df97f6812` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('2024-03-26 23:22:45.536000', '2024-03-26 23:22:45.536000', NULL, 1, 'NIKE AIR ZOOM TEMPO NEXT', 'Giày chạy bộ Nike Air Zoom Tempo NEXT% đôi giày chạy bộ hàng ngày được yêu thích, với phom dáng rất gọn gàng và thanh lịch đôi giày được thu hút từ những ánh mắt đầu tiên của các Anh chị Em runner. Đôi giày Giày chạy bộ Nike Air Zoom Tempo NEXT% có thể kế', 'https://i.imgur.com/ChlRrFR.jpeg', 6800000, 1, 1, 100, 1, 1, 1, 1, 1);

-- ----------------------------
-- Table structure for productdetail
-- ----------------------------
DROP TABLE IF EXISTS `productdetail`;
CREATE TABLE `productdetail`  (
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `picture` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `productId` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK_42f77c2d330e36a128dec7e6570`(`productId` ASC) USING BTREE,
  CONSTRAINT `FK_42f77c2d330e36a128dec7e6570` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of productdetail
-- ----------------------------
INSERT INTO `productdetail` VALUES ('2024-03-26 23:24:30.461000', '2024-03-26 23:24:30.461000', NULL, 1, 'https://i.imgur.com/Ye9plmG.jpeg', 1);
INSERT INTO `productdetail` VALUES ('2024-03-26 23:25:28.978000', '2024-03-26 23:25:28.978000', NULL, 2, 'https://i.imgur.com/bso81P3.jpeg', 1);
INSERT INTO `productdetail` VALUES ('2024-03-26 23:26:53.159000', '2024-03-26 23:26:53.159000', NULL, 3, 'https://i.imgur.com/NxXQsSy.jpeg', 1);
INSERT INTO `productdetail` VALUES ('2024-03-26 23:27:51.287000', '2024-03-26 23:27:51.287000', NULL, 4, 'https://i.imgur.com/G6cGUSU.jpeg', 1);

-- ----------------------------
-- Table structure for productprop
-- ----------------------------
DROP TABLE IF EXISTS `productprop`;
CREATE TABLE `productprop`  (
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `nameProp` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `valueProp` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `productId` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK_980b1ed324498ac3e048f0448e6`(`productId` ASC) USING BTREE,
  CONSTRAINT `FK_980b1ed324498ac3e048f0448e6` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of productprop
-- ----------------------------

-- ----------------------------
-- Table structure for shipper
-- ----------------------------
DROP TABLE IF EXISTS `shipper`;
CREATE TABLE `shipper`  (
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `companyName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `active` tinyint NOT NULL DEFAULT 1,
  `rate` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shipper
-- ----------------------------

-- ----------------------------
-- Table structure for supplier
-- ----------------------------
DROP TABLE IF EXISTS `supplier`;
CREATE TABLE `supplier`  (
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `address` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `phone` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `city` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `country` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `postalCode` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(75) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `url` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `logo` varchar(75) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ranking` int NOT NULL,
  `active` tinyint NOT NULL DEFAULT 1,
  `customerId` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `IDX_977003cc69959e72078db19db6`(`phone` ASC) USING BTREE,
  UNIQUE INDEX `IDX_c40cbff7400f06ae1c8d9f4233`(`email` ASC) USING BTREE,
  UNIQUE INDEX `REL_b28bf31339aa7f2a202bb8146c`(`customerId` ASC) USING BTREE,
  CONSTRAINT `FK_b28bf31339aa7f2a202bb8146cd` FOREIGN KEY (`customerId`) REFERENCES `customer` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of supplier
-- ----------------------------
INSERT INTO `supplier` VALUES ('2024-03-26 23:04:48.678000', '2024-03-26 23:06:16.000000', NULL, 1, 'Nike', 'Hãng giày Nike', 'Beaverton', '11991199', 'Oregon', 'Mỹ', '000000', 'nike@gmail.com', 'nike.com', '/img/banner/nike.png', 1, 1, NULL);

SET FOREIGN_KEY_CHECKS = 1;
