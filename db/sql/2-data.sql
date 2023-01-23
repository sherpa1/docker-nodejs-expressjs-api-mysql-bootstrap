SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

INSERT INTO `tasks` (`id`, `content`, `completed`, `user_id`) VALUES
(1,	'Prendre rdv chez le médecin',	0,	1),
(2,	'Aller faire du sport',	1,	1),
(3,	'Prendre des vacances',	0,	1),
(4,	'Réviser mon cours de Docker + Node.js',	0,	1);

INSERT INTO `users` (`id`, `fullname`, `email`) VALUES
(1,	'John Doe',	'john@doe.com');