-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 24, 2022 at 08:29 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `easycafe`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id_account` int(5) NOT NULL,
  `line_id` varchar(30) NOT NULL,
  `line_name` varchar(30) NOT NULL,
  `line_pic` varchar(100) NOT NULL,
  `status` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id_account`, `line_id`, `line_name`, `line_pic`, `status`) VALUES
(1, '460e985fb8965230f0c6e79ee1acf8', 'Trace', 'https://robohash.org/voluptatemquidemoptio.png?size=50x50&set=set1', 'admin'),
(2, 'fcc3374e6584ee79f384f0c1d62f6c', 'Calv', 'https://robohash.org/doloresquicumque.png?size=50x50&set=set1', 'admin'),
(3, 'a284da4bcf7d0e409bc605ec5cb93f', 'Lesley', 'https://robohash.org/sequidelenitiperspiciatis.png?size=50x50&set=set1', 'admin'),
(4, 'c4bdf5b7f2fb35506a8449b18c5eae', 'Holly', 'https://robohash.org/estrepellatsint.png?size=50x50&set=set1', 'barista'),
(5, 'cc379611de94f3965affd70147bb1d', 'Bree', 'https://robohash.org/rerumtemporalaboriosam.png?size=50x50&set=set1', 'barista'),
(6, '05b3add34f669ea656de7faa2237dd', 'Sasha', 'https://robohash.org/autemnobismagni.png?size=50x50&set=set1', 'user'),
(7, '3c6b9c864363f89a86324dd78bc610', 'Virgilio', 'https://robohash.org/etdoloribusaut.png?size=50x50&set=set1', 'user'),
(8, 'c57a09d4db3bce527b8c1389ada353', 'Elnore', 'https://robohash.org/optioestaccusantium.png?size=50x50&set=set1', 'user'),
(9, '1c53b1a857a3fed6b9e7f4330447a6', 'Jakie', 'https://robohash.org/aspernatursimiliqueoptio.png?size=50x50&set=set1', 'user'),
(10, '07d94866f84801efbac5b82776602f', 'Austen', 'https://robohash.org/dolorvoluptastenetur.png?size=50x50&set=set1', 'user'),
(11, '546971961442b4100194b2fae4e665', 'Cazzie', 'https://robohash.org/doloresenimunde.png?size=50x50&set=set1', 'user'),
(12, 'db66dc394ab049d044f931a5f846a6', 'Lidia', 'https://robohash.org/sintrepellatearum.png?size=50x50&set=set1', 'user'),
(13, 'bd3aad259ed6213349c23f7e5c06f0', 'Harmony', 'https://robohash.org/delenitiremet.png?size=50x50&set=set1', 'user'),
(14, 'ec0227f82c0e8184388d976a9768a5', 'Cass', 'https://robohash.org/voluptatibuscupiditatenon.png?size=50x50&set=set1', 'user'),
(15, '0314fb39d7c51020be6dfa497bf74a', 'Nobie', 'https://robohash.org/doloremsapientedignissimos.png?size=50x50&set=set1', 'user'),
(16, '7991f02c16e26d9215bfdc8806f2e9', 'Ursola', 'https://robohash.org/reiciendismagnamvelit.png?size=50x50&set=set1', 'user'),
(17, 'bfccf0e4ddc9daceae9e16c4c43fc2', 'Bill', 'https://robohash.org/esseperferendisitaque.png?size=50x50&set=set1', 'user'),
(18, '8abbc93d67e54e137bb869b9b4b7e2', 'Valry', 'https://robohash.org/aliquidsitid.png?size=50x50&set=set1', 'user'),
(19, 'a17cad3118e68afffa30f595e713f7', 'Glenine', 'https://robohash.org/perspiciatisetfacilis.png?size=50x50&set=set1', 'user'),
(20, 'b195798b4f2bec58423518fc15e52d', 'Sanson', 'https://robohash.org/voluptatemdoloreaccusantium.png?size=50x50&set=set1', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id_category` int(3) NOT NULL,
  `category_name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id_category`, `category_name`) VALUES
(1, 'coffee'),
(2, 'tea'),
(3, 'milk/chocolate'),
(4, 'juice&smoothies');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id_order` int(11) NOT NULL,
  `id_account` int(5) NOT NULL,
  `at_date` varchar(20) NOT NULL,
  `total_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id_product` int(4) NOT NULL,
  `product_name` varchar(25) NOT NULL,
  `product_photo` varchar(50) NOT NULL,
  `id_category` int(3) NOT NULL,
  `hot_price` int(11) DEFAULT NULL,
  `iced_price` int(11) DEFAULT NULL,
  `frappe_price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id_product`, `product_name`, `product_photo`, `id_category`, `hot_price`, `iced_price`, `frappe_price`) VALUES
(1, 'espresso', 'espresso.jpg', 1, 30, 0, 0),
(2, 'americano', 'americano.jpg', 1, 35, 55, 0),
(3, 'cappuccion', 'cappuccion.jpg', 1, 0, 65, 0),
(4, 'caramelFrappuccino', 'caramelFrappuccino.jpg', 1, 120, 140, 165),
(5, 'earlGreyTea', 'earlGreyTea.jpg', 2, 45, 60, 65),
(6, 'earlGreyTeaLatte', 'earlGreyTeaLatte.jpg', 2, 50, 65, 70),
(7, 'greenTeaFrappuccino', 'greenTeaFrappuccino.jpg', 2, 50, 65, 70),
(8, 'milk', 'milk.jpg', 3, 55, 65, 75),
(9, 'classicChocolate', 'classicChocolate.jpg', 3, 40, 0, 0),
(10, 'signatureChocolate', 'signatureChocolate.jpg', 3, 45, 50, 55),
(11, 'flatWhite', 'flatWhite.jpg', 3, 40, 45, 50),
(12, 'LycheeEarl GreyTea', 'LycheeEarlGreyTea.jpg', 4, 0, 45, 0),
(13, 'sunset', 'sunset.jpg', 4, 0, 35, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id_account`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id_category`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id_order`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id_product`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id_account` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id_category` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id_order` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id_product` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
