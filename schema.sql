DROP TABLE  IF EXISTS `Users`;
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

DROP TABLE IF EXISTS `DrawHistory`;
CREATE TABLE `DrawHistory` (
  `drawId` int NOT NULL AUTO_INCREMENT,
  `drawDate` datetime DEFAULT NULL,
  `winningNumber` varchar(255) NULL,
  `prizeMoney` decimal(10, 2) NOT NULL DEFAULT '100.00',
  PRIMARY KEY (`drawId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `TransactionHistory`;
CREATE TABLE `TransactionHistory` (
  `transactionId` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `type` varchar(100) NOT NULL,
  `drawId` int NULL,
  `amount` decimal(10, 2) NOT NULL DEFAULT '0.00',
  `transactionDate` datetime NOT NULL,
  PRIMARY KEY (`transactionId`),
  FOREIGN KEY (`userId`) REFERENCES `Users` (`userId`) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (`drawId`) REFERENCES `DrawHistory` (`drawId`) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `BetHistory`;
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

DROP TABLE IF EXISTS `Winners`;
CREATE TABLE `Winners` (
  `winnerId` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `drawId` int NOT NULL,
  `betId` int NOT NULL,
  PRIMARY KEY (`winnerId`),
  FOREIGN KEY (`userId`)  REFERENCES `Users` (`userId`) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (`drawId`) REFERENCES `DrawHistory` (`drawId`) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Initial data
INSERT INTO `DrawHistory` (`drawDate`, `winningNumber`, `prizeMoney`) VALUES (NOW(), '09,22,03,07,02,04', 100.00);
INSERT INTO `DrawHistory` (`drawDate`, `winningNumber`, `prizeMoney`) VALUES (NOW(), NULL, 110.00);


INSERT INTO `Users` (`username`, `fullname`, `emailaddress`, `password`, `walletBalance`, `created_at`, `updated_at`) VALUES ('test', 'test', 'test@test.com', 'e0aaacccc142dd2e3235385a90d5bfc2c682a2cae0be4d1b631031276605d811', 1000.00, NOW(), NOW())