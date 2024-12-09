-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 09, 2024 at 02:02 AM
-- Server version: 8.0.30
-- PHP Version: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mulan`
--

-- --------------------------------------------------------

--
-- Table structure for table `mulan`
--

CREATE TABLE `mulan` (
  `id` int NOT NULL,
  `nama` varchar(255) NOT NULL DEFAULT 'Tanpa nama',
  `story` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `mulan`
--

INSERT INTO `mulan` (`id`, `nama`, `story`) VALUES
(3, 'Fa Mulan', 'Tokoh utama cerita ini, seorang gadis muda yang cerdas, berani, dan sangat mencintai keluarganya. Mulan menyamar sebagai pria untuk menggantikan ayahnya yang sudah tua dan tidak mampu berperang, dengan tujuan melindungi kehormatan keluarga mereka.'),
(7, 'Fa Li', 'Ibu Mulan, seorang wanita yang penuh kasih sayang. Dia peduli terhadap Mulan, meskipun cemas tentang keputusan Mulan untuk menyamar sebagai pria dan berperang. Fa Li juga sangat mendukung keputusan Mulan pada akhirnya.'),
(8, 'Fa Zhou', 'Ayah Mulan, seorang prajurit yang sudah tua dan lemah. Karena usia dan kesehatannya, dia tidak dapat bergabung dalam peperangan. Mulan sangat menghormati ayahnya dan berusaha melindunginya dengan menyamar.'),
(17, 'Sashiko', 'Bukan OHIO, tapi OITA');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`username`, `password`) VALUES
('bintang', '202cb962ac59075b964b07152d234b70'),
('minuettaro', '202cb962ac59075b964b07152d234b70');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mulan`
--
ALTER TABLE `mulan`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mulan`
--
ALTER TABLE `mulan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
