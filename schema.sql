DROP TABLE IF EXISTS `PayoutHistory`;
DROP TABLE IF EXISTS `Winners`;
DROP TABLE IF EXISTS `BetHistory`;
DROP TABLE IF EXISTS `TransactionHistory`;
DROP TABLE IF EXISTS `Users`;
DROP TABLE IF EXISTS `DrawHistory`;

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

CREATE TABLE `DrawHistory` (
  `drawId` int NOT NULL AUTO_INCREMENT,
  `drawDate` datetime DEFAULT NULL,
  `winningNumber` varchar(255) NOT NULL,
  `prizeMoney` decimal(10, 2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`drawId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `TransactionHistory` (
  `transactionId` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `type` varchar(100) NOT NULL,
  `amount` decimal(10, 2) NOT NULL DEFAULT '0.00',
  `transactionDate` datetime NOT NULL,
  PRIMARY KEY (`transactionId`),
  FOREIGN KEY (`userId`) REFERENCES `Users` (`userId`) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `BetHistory` (
  `betId` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `drawId` int NOT NULL,
  `betNumbers` varchar(255) NOT NULL,
  `betDate` datetime NOT NULL,
  PRIMARY KEY (`betId`),
  FOREIGN KEY (`userId`) REFERENCES `Users` (`userId`) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (`drawId`) REFERENCES `DrawHistory` (`drawId`) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `Winners` (
  `winnerId` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `drawId` int NOT NULL,
  PRIMARY KEY (`winnerId`),
  FOREIGN KEY (`userId`) REFERENCES `Users` (`userId`) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (`drawId`) REFERENCES `DrawHistory` (`drawId`) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `PayoutHistory` (
  `payoutId` int NOT NULL AUTO_INCREMENT,
  `winnerId` int NOT NULL,
  `payoutDate` datetime NOT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`payoutId`),
  FOREIGN KEY (`winnerId`) REFERENCES `Winners` (`winnerId`) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
