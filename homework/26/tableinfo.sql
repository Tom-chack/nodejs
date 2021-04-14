-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 14, 2021 at 11:31 AM
-- Server version: 5.7.31
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `_nodejs`
--

-- --------------------------------------------------------

--
-- Table structure for table `tableinfo`
--

DROP TABLE IF EXISTS `tableinfo`;
CREATE TABLE IF NOT EXISTS `tableinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mobile` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tableinfo`
--

INSERT INTO `tableinfo` (`id`, `name`, `email`, `mobile`) VALUES
(1, 'Tigran', 'Tigran@gmail.com', '9210053520'),
(2, 'Azat', 'Azat@gmail.com', '9810098100'),
(3, 'Davit', 'Davit@gmail.com', '9210053520'),
(4, 'Levon', 'Levon@gmail.com', '9810098180'),
(5, 'Mher', 'Mher@gmail.com', '9210053580'),
(6, 'Aram', 'Aram@gmail.com', '9810098180');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
