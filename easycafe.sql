-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 12, 2022 at 03:44 AM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `easyCafe`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id_account` int(5) NOT NULL,
  `line_id` varchar(50) NOT NULL,
  `line_name` varchar(30) NOT NULL,
  `line_pic` varchar(150) NOT NULL,
  `role` varchar(15) NOT NULL,
  `token` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id_account`, `line_id`, `line_name`, `line_pic`, `role`, `token`) VALUES
(1, '460e985fb8965230f0c6e79ee1acf8', 'Trace', 'https://robohash.org/voluptatemquidemoptio.png?size=50x50&set=set1', 'admin', 'oV1dLtiPtWDX8pWbWBuBt5Lp2bRZRLrg6QWJoU49SDU'),
(2, 'fcc3374e6584ee79f384f0c1d62f6c', 'Calv', 'https://robohash.org/doloresquicumque.png?size=50x50&set=set1', 'admin', 'oV1dLtiPtWDX8pWbWBuBt5Lp2bRZRLrg6QWJoU49SDU'),
(3, 'a284da4bcf7d0e409bc605ec5cb93f', 'Lesley', 'https://robohash.org/sequidelenitiperspiciatis.png?size=50x50&set=set1', 'admin', 'oV1dLtiPtWDX8pWbWBuBt5Lp2bRZRLrg6QWJoU49SDU'),
(4, 'c4bdf5b7f2fb35506a8449b18c5eae', 'Holly', 'https://robohash.org/estrepellatsint.png?size=50x50&set=set1', 'bartender', 'Null'),
(5, 'cc379611de94f3965affd70147bb1d', 'Bree', 'https://robohash.org/rerumtemporalaboriosam.png?size=50x50&set=set1', 'bartender', 'oV1dLtiPtWDX8pWbWBuBt5Lp2bRZRLrg6QWJoU49SDU'),
(6, '05b3add34f669ea656de7faa2237dd', 'Sasha', 'https://robohash.org/autemnobismagni.png?size=50x50&set=set1', 'user', 'oV1dLtiPtWDX8pWbWBuBt5Lp2bRZRLrg6QWJoU49SDU'),
(7, '3c6b9c864363f89a86324dd78bc610', 'Virgilio', 'https://robohash.org/etdoloribusaut.png?size=50x50&set=set1', 'user', 'oV1dLtiPtWDX8pWbWBuBt5Lp2bRZRLrg6QWJoU49SDU'),
(8, 'c57a09d4db3bce527b8c1389ada353', 'Elnore', 'https://robohash.org/optioestaccusantium.png?size=50x50&set=set1', 'user', 'oV1dLtiPtWDX8pWbWBuBt5Lp2bRZRLrg6QWJoU49SDU'),
(9, '1c53b1a857a3fed6b9e7f4330447a6', 'Jakie', 'https://robohash.org/aspernatursimiliqueoptio.png?size=50x50&set=set1', 'user', 'oV1dLtiPtWDX8pWbWBuBt5Lp2bRZRLrg6QWJoU49SDU'),
(10, '07d94866f84801efbac5b82776602f', 'Austen', 'https://robohash.org/dolorvoluptastenetur.png?size=50x50&set=set1', 'user', 'oV1dLtiPtWDX8pWbWBuBt5Lp2bRZRLrg6QWJoU49SDU'),
(11, '546971961442b4100194b2fae4e665', 'Cazzie', 'https://robohash.org/doloresenimunde.png?size=50x50&set=set1', 'user', 'oV1dLtiPtWDX8pWbWBuBt5Lp2bRZRLrg6QWJoU49SDU'),
(12, 'db66dc394ab049d044f931a5f846a6', 'Lidia', 'https://robohash.org/sintrepellatearum.png?size=50x50&set=set1', 'user', 'oV1dLtiPtWDX8pWbWBuBt5Lp2bRZRLrg6QWJoU49SDU'),
(13, 'bd3aad259ed6213349c23f7e5c06f0', 'Harmony', 'https://robohash.org/delenitiremet.png?size=50x50&set=set1', 'user', 'oV1dLtiPtWDX8pWbWBuBt5Lp2bRZRLrg6QWJoU49SDU'),
(14, 'ec0227f82c0e8184388d976a9768a5', 'Cass', 'https://robohash.org/voluptatibuscupiditatenon.png?size=50x50&set=set1', 'user', 'oV1dLtiPtWDX8pWbWBuBt5Lp2bRZRLrg6QWJoU49SDU'),
(15, '0314fb39d7c51020be6dfa497bf74a', 'Nobie', 'https://robohash.org/doloremsapientedignissimos.png?size=50x50&set=set1', 'user', NULL),
(16, '7991f02c16e26d9215bfdc8806f2e9', 'Ursola', 'https://robohash.org/reiciendismagnamvelit.png?size=50x50&set=set1', 'user', NULL),
(17, 'bfccf0e4ddc9daceae9e16c4c43fc2', 'Bill', 'https://robohash.org/esseperferendisitaque.png?size=50x50&set=set1', 'user', NULL),
(18, '8abbc93d67e54e137bb869b9b4b7e2', 'Valry', 'https://robohash.org/aliquidsitid.png?size=50x50&set=set1', 'user', NULL),
(19, 'a17cad3118e68afffa30f595e713f7', 'Glenine', 'https://robohash.org/perspiciatisetfacilis.png?size=50x50&set=set1', 'user', NULL),
(20, 'b195798b4f2bec58423518fc15e52d', 'Sanson', 'https://robohash.org/voluptatemdoloreaccusantium.png?size=50x50&set=set1', 'user', NULL),
(30, 'Ue805292b91483ad1d6e383488efa0398', 'Janista', 'https://profile.line-scdn.net/0hQCDyvXrrDmxpABms--RwExlQDQZKcVd-F24UCQlTVlRUNUE8QzZCAwhXVQ9SMUs6FmBBWl9QAg9lE3kKd1byWG4wUFtQNko-QGJHiQ', 'user', 't03jWupXP3FaJ6JfnWtAiMD5rehEvwArJpNvcNplxHu'),
(31, 'U4e2e83739f82651644307841e3736f18', 'Amonrat.', 'https://profile.line-scdn.net/0hV0mmQakRCR9AFB6JPP93YDBECnVjZVANOHVOfX1DBy4pLRlKPnNDcXYUAC8odk9MbnFPLCFEVnpMB355XkL1K0ckVyh5Ik1NaXZA-g', 'user', '4K1KMRkG4u33E6iqTzVtZVCHtlXDuMi7bPiOvQtLtJJ');

-- --------------------------------------------------------

--
-- Table structure for table `beforeConfirmAPI`
--

CREATE TABLE `beforeConfirmAPI` (
  `transactionId` varchar(255) NOT NULL,
  `amount` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `beforeConfirmAPI`
--

INSERT INTO `beforeConfirmAPI` (`transactionId`, `amount`) VALUES
('2022070700719504600', 30),
('2022070700719508200', 30),
('2022070700719509800', 30),
('2022070700719510300', 30),
('2022070700719510800', 30),
('2022070700719511000', 30),
('2022070700719511300', 30),
('2022070700719511800', 30),
('2022070700719512000', 30),
('2022070700719512800', 30),
('2022070700719513300', 30),
('2022070700719516400', 30),
('2022070700719517400', 30),
('2022070700719518500', 30),
('2022070700719522800', 30),
('2022070700719523300', 30),
('2022070700719523800', 30),
('2022070700719524600', 30),
('2022070700719529200', 30),
('2022070700719530800', 30),
('2022070700719531800', 30),
('2022070700719532500', 30),
('2022070700719532800', 30),
('2022070700719533800', 30),
('2022070700719534000', 30),
('2022070700719534300', 30),
('2022070700719534600', 30),
('2022070800719566000', 30),
('2022070800719566600', 30),
('2022070800719567600', 30),
('2022070800719568600', 30),
('2022070800719569700', 30),
('2022070800719570000', 30),
('2022070800719571200', 30),
('2022070800719571700', 30),
('2022070800719572200', 30),
('2022070800719572500', 30),
('2022070800719572700', 30),
('2022070800719573000', 30),
('2022070800719573200', 30),
('2022070800719573500', 30),
('2022070800719573800', 30),
('2022070800719574000', 30),
('2022070800719574300', 30),
('2022070800719574500', 30),
('2022070800719574800', 30),
('2022070800719575000', 30),
('2022070800719575300', 30),
('2022070800719575800', 30),
('2022070800719576800', 30),
('2022070800719578000', 30),
('2022070800719579000', 30),
('2022070800719579100', 30),
('2022070800719579400', 30),
('2022070800719579600', 30),
('2022070800719580810', 30),
('2022070800719581210', 30),
('2022070800719581510', 30),
('2022070800719615210', 30),
('2022070800719617810', 30),
('2022070800719626510', 30),
('2022070800719626610', 35),
('2022070800719630610', 30),
('2022070800719630910', 30),
('2022070800719631410', 30),
('2022070800719631610', 30),
('2022070800719631910', 30),
('2022070800719657510', 130),
('2022070800719658610', 30),
('2022070800719658710', 30),
('2022070800719658910', 30),
('2022070800719659210', 30),
('2022070800719659510', 30),
('2022070800719703010', 30),
('2022070800719708010', 30),
('2022070800719708110', 30),
('2022070900719759610', 30),
('2022070900719760010', 30),
('2022070900719764410', 60),
('2022070900719764510', 65),
('2022070900719766910', 30),
('2022070900719768210', 140),
('2022070900719770510', 30),
('2022070900719770710', 30),
('2022070900719770810', 130),
('2022070900719770910', 130),
('2022070900719771010', 335),
('2022070900719771310', 65),
('2022070900719771410', 295),
('2022070900719772010', 30),
('2022071000719781110', 30),
('2022071000719781410', 30),
('2022071000719781610', 30),
('2022071000719781810', 30),
('2022071000719782010', 30),
('2022071000719782110', 30),
('2022071000719782310', 30),
('2022071000719782410', 30),
('2022071000719782510', 30),
('2022071000719782810', 30),
('2022071000719783110', 30),
('2022071000719783710', 30),
('2022071000719784510', 30),
('2022071000719784610', 30),
('2022071000719784910', 30),
('2022071000719785010', 30),
('2022071000719785110', 30),
('2022071000719785210', 30),
('2022071000719785310', 30),
('2022071000719785410', 55),
('2022071000719785510', 30),
('2022071000719829610', 30),
('2022071000719829810', 30),
('2022071000719832810', 30),
('2022071000719833210', 30),
('2022071000719833310', 30),
('2022071000719834710', 30),
('2022071000719835510', 30),
('2022071000719837410', 30),
('2022071100719986310', 30),
('2022071100720003410', 30),
('2022071100720008510', 30),
('2022071100720011310', 30),
('2022071200720012010', 30),
('2022071200720013110', 30),
('2022071200720056910', 30),
('2022071200720057110', 30),
('2022071200720058510', 65),
('2022071200720059910', 30),
('2022071200720060710', 30),
('2022071200720064010', 165),
('[object Object]', 30);

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id_cart` int(15) NOT NULL,
  `id_account` int(5) NOT NULL,
  `id_product` int(4) NOT NULL,
  `amount_cup` int(5) NOT NULL,
  `type` varchar(30) NOT NULL,
  `status_pay` varchar(30) NOT NULL,
  `total` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id_cart`, `id_account`, `id_product`, `amount_cup`, `type`, `status_pay`, `total`) VALUES
(1, 1, 1, 1, 'hot', 'wait', 0),
(2, 2, 2, 1, 'iced', 'wait', 0),
(3, 2, 3, 1, 'iced', 'wait', 0);

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
(3, 'milk&chocolate'),
(4, 'juice&smoothies');

-- --------------------------------------------------------

--
-- Table structure for table `history_order`
--

CREATE TABLE `history_order` (
  `id_history` int(11) NOT NULL,
  `id_order` int(11) NOT NULL,
  `id_product` int(4) NOT NULL,
  `id_account` int(5) NOT NULL,
  `amount` int(5) NOT NULL,
  `type` varchar(30) NOT NULL,
  `process` varchar(15) NOT NULL,
  `at_date` varchar(20) NOT NULL,
  `total_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `history_order`
--

INSERT INTO `history_order` (`id_history`, `id_order`, `id_product`, `id_account`, `amount`, `type`, `process`, `at_date`, `total_price`) VALUES
(1, 1, 1, 1, 1, 'hot', '', '26/6/2565', 30),
(2, 2, 2, 2, 1, 'iced', 'R', '26/6/2565', 30),
(34, 40, 1, 29, 1, 'hot', 'R', '09/07/2022', 30),
(35, 41, 2, 29, 1, 'iced', 'R', '09/07/2022', 55),
(36, 42, 1, 29, 1, 'hot', 'R', '09/07/2022', 30),
(37, 43, 1, 29, 1, 'hot', 'R', '10/07/2022', 30),
(38, 44, 1, 29, 1, 'hot', 'R', '10/07/2022', 30),
(39, 45, 1, 29, 1, 'hot', 'R', '10/07/2022', 30),
(42, 48, 1, 29, 1, 'hot', 'R', '10/07/2022', 30),
(43, 49, 1, 29, 1, 'hot', 'R', '11/07/2022', 30),
(44, 50, 1, 29, 1, 'hot', 'R', '11/07/2022', 30),
(45, 51, 1, 29, 1, 'hot', 'D', '11/07/2022', 30),
(46, 52, 1, 30, 1, 'hot', 'A', '12/07/2022', 30),
(47, 53, 1, 30, 1, 'hot', 'D', '12/07/2022', 30),
(48, 54, 3, 30, 1, 'iced', 'D', '12/07/2022', 65),
(49, 55, 1, 31, 1, 'hot', 'R', '12/07/2022', 30),
(50, 56, 2, 31, 3, 'iced', 'D', '12/07/2022', 165);

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

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id_order`, `id_account`, `at_date`, `total_price`) VALUES
(1, 1, '26/6/2565', 30),
(2, 2, '26/6/2565', 30),
(40, 29, '09/07/2022', 30),
(41, 29, '09/07/2022', 55),
(42, 29, '09/07/2022', 30),
(43, 29, '10/07/2022', 30),
(44, 29, '10/07/2022', 30),
(45, 29, '10/07/2022', 30),
(46, 29, '10/07/2022', 30),
(47, 29, '10/07/2022', 30),
(48, 29, '10/07/2022', 30),
(49, 29, '11/07/2022', 30),
(50, 29, '11/07/2022', 30),
(51, 29, '11/07/2022', 30),
(52, 30, '12/07/2022', 30),
(53, 30, '12/07/2022', 30),
(54, 30, '12/07/2022', 65),
(55, 31, '12/07/2022', 30),
(56, 31, '12/07/2022', 165);

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
(12, 'LycheeEarl GreyTea', 'https://lh3.googleusercontent.com/JMQ08tyt4Ik9ap9J', 4, 0, 45, 0),
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
-- Indexes for table `beforeConfirmAPI`
--
ALTER TABLE `beforeConfirmAPI`
  ADD PRIMARY KEY (`transactionId`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id_cart`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id_category`);

--
-- Indexes for table `history_order`
--
ALTER TABLE `history_order`
  ADD PRIMARY KEY (`id_history`);

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
  MODIFY `id_account` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id_cart` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id_category` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `history_order`
--
ALTER TABLE `history_order`
  MODIFY `id_history` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id_order` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id_product` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
