DROP TABLE IF EXISTS `DrawHistory`;
CREATE TABLE `DrawHistory` (
  `drawId` int NOT NULL AUTO_INCREMENT,
  `drawDate` datetime DEFAULT NULL,
  `winningNumber` varchar(255) NOT NULL,
  `prizeMoney` decimal(10, 2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`drawId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `emailaddress` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `walletBalance` decimal(10,2) NOT NULL DEFAULT '0.00',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `TransactionHistory`;
CREATE TABLE `TransactionHistory` (
  `transactionId` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `type` varchar(100) NOT NULL,
  `amount` decimal(10, 2) NOT NULL DEFAULT '0.00',
  `transactionDate` datetime NOT NULL,
  PRIMARY KEY (`transactionId`),
  FOREIGN KEY (`userId`) REFERENCES `Users` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


