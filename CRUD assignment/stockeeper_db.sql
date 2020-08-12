/*
MySQL Data Transfer
Source Host: localhost
Source Database: stockeeper_db
Target Host: localhost
Target Database: stockeeper_db
Date: 8/12/2020 9:09:50 PM
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for accounts
-- ----------------------------
DROP TABLE IF EXISTS `accounts`;
CREATE TABLE `accounts` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(255) default NULL,
  `password` varchar(255) default NULL,
  `created_at` date default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(100) NOT NULL auto_increment,
  `name` varchar(100) default NULL,
  `password` varchar(100) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for store
-- ----------------------------
DROP TABLE IF EXISTS `store`;
CREATE TABLE `store` (
  `id` int(100) unsigned NOT NULL auto_increment,
  `name` varchar(255) collate utf8_unicode_ci default NULL,
  `category` varchar(255) collate utf8_unicode_ci default NULL,
  `qty` int(4) default NULL,
  `qty_per_pack` varchar(11) collate utf8_unicode_ci default NULL,
  `warehouse_id` int(100) default NULL,
  `company` varchar(100) collate utf8_unicode_ci default NULL,
  `created_at` timestamp NULL default NULL,
  `updated_at` timestamp NULL default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Table structure for warehouses
-- ----------------------------
DROP TABLE IF EXISTS `warehouses`;
CREATE TABLE `warehouses` (
  `id` int(10) NOT NULL auto_increment,
  `name` varchar(255) collate utf8_unicode_ci default NULL,
  `address` text collate utf8_unicode_ci,
  `description` text collate utf8_unicode_ci,
  `created_at` timestamp NULL default NULL,
  `updated_at` timestamp NULL default NULL,
  PRIMARY KEY  (`id`),
  UNIQUE KEY `warehouses_tables_id_unique` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `accounts` VALUES ('3', 'user20', '123', null);
INSERT INTO `accounts` VALUES ('4', 'user21', '12345', null);
INSERT INTO `admin` VALUES ('1', 'admin', '12345');
INSERT INTO `store` VALUES ('7', 'အာမိုပန်ဒါ', 'ပေါင်းသတ်ဆေး', '25', '2', '2', 'Aventine Co.ltd', null, null);
INSERT INTO `store` VALUES ('8', 'ဆိုင်ကလုံး', 'ပိုးသတ်ဆေး', '90', '20', '1', 'Awba', null, null);
INSERT INTO `store` VALUES ('9', 'ဖော့ဒရင်း', 'ပိုးသတ်ဆေး', '20', '10', '1', 'Awba', null, null);
INSERT INTO `store` VALUES ('10', 'ကလိုဆိုဒ်', 'ပိုးသတ်ဆေး', '10', '20', '1', 'Wisara', null, null);
INSERT INTO `store` VALUES ('11', 'အာမိုမီဒါ', 'မှိုသတ်ဆေး', '40', '10', '1', 'Aventine Co.ltd', null, null);
INSERT INTO `store` VALUES ('12', 'ဆိုင်ရင်', 'ပိုးသတ်ဆေး', '20', '10', '1', 'မြန်မာ့ကောင်းသုခ', null, null);
INSERT INTO `store` VALUES ('13', 'အာမိုကွတ်', 'ပေါင်းသတ်ဆေး', '10', '20', '2', 'Aventine Co.ltd', null, null);
INSERT INTO `store` VALUES ('14', 'ရွှေတိုး  17:8:8', 'ဓာတ်မြေသြဇာ', '40', '1', '2', 'Wisara', null, null);
INSERT INTO `store` VALUES ('15', 'ဇီးရိုး', 'ပေါင်းသတ်ဆေး', '40', '4', '2', 'Wisara', null, null);
INSERT INTO `store` VALUES ('16', 'ရွှေဆိုက်ပါ', 'ပိုးသတ်ဆေး', '40', '10', '2', 'Mega Co.ld', null, null);
INSERT INTO `store` VALUES ('19', 'ရွှေဆိုက်ပါ', 'ပိုးသတ်ဆေး', '50', '10', '2', 'Mega co.ld', null, null);
INSERT INTO `warehouses` VALUES ('1', 'ဂိုဒေါင် ( 1 )', '-', '-', '2020-07-13 19:47:43', null);
INSERT INTO `warehouses` VALUES ('2', 'ဂိုဒေါင် ( 2 )', '-', '-', '2020-07-23 19:49:24', null);
INSERT INTO `warehouses` VALUES ('3', 'ဂိုဒေါင် ( 3 )', '-', '-', null, null);
INSERT INTO `warehouses` VALUES ('4', 'ဂိုဒေါင် ( 4 )', '-', '-', null, null);
INSERT INTO `warehouses` VALUES ('5', 'ဂိုဒေါင် ( 5 )', '-', '-', null, null);
