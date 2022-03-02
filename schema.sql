DROP DATABASE IF EXISTS questionsAndAnswers;

CREATE DATABASE questionsAndAnswers;

USE questionsAndAnswers;

DROP TABLE IF EXISTS `questions`;

CREATE TABLE `questions` (
  `id` SERIAL PRIMARY KEY,
  `body` VARCHAR NOT NULL,
  `timePosted` TIME NOT NULL,
  `helpfulness` SMALLINT DEFAULT NULL,
  `report` BOOLEAN NOT NULL,
  `username` TEXT DEFAULT NULL,
  `email` TEXT DEFAULT NULL,
  `product_id` INTEGER NOT NULL,
);

DROP TABLE IF EXISTS `answers`;

CREATE TABLE `answers` (
  `id` SERIAL PRIMARY KEY,
  `body` VARCHAR NOT NULL,
  `timePosted` TIME NOT NULL,
  `helpfulness` SMALLINT NOT NULL,
  `report` BOOLEAN NOT NULL,
  `username` TEXT NOT NULL,
  `email` TEXT NOT NULL,
  FOREIGN KEY (id_questions)
    REFERENCES `questions` (`id`),
);

-- ---
-- Table 'photos'
--
-- ---

DROP TABLE IF EXISTS `photos`;

CREATE TABLE `photos` (
  `id` SERIAL PRIMARY KEY,
  `url` VARCHAR NOT NULL,
  FOREIGN KEY (id_answers)
    REFERENCES `answers` (`id`),
);

-- ---
-- Foreign Keys
-- ---

-- ALTER TABLE `answers` ADD FOREIGN KEY (id_questions) REFERENCES `questions` (`id`);
-- ALTER TABLE `photos` ADD FOREIGN KEY (id_answers) REFERENCES `answers` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `answers` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `questions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `answers` (`id`,`body`,`timePosted`,`helpfulness`,`report`,`username`,`email`,`id_questions`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `questions` (`id`,`body`,`timePosted`,`helpfulness`,`report`,`username`,`email`) VALUES
-- ('','','','','','','');
-- INSERT INTO `photos` (`id`,`url`,`id_answers`) VALUES
-- ('','','');