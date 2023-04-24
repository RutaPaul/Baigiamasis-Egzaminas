CREATE TABLE `questions` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `UserID` int NOT NULL,
  `Date` datetime NOT NULL,
  `Likes` int DEFAULT NULL,
  `Dislikes` int DEFAULT NULL,
  `Question` varchar(2000) NOT NULL,
  `Title` varchar(100) DEFAULT NULL,
  `Edited` int DEFAULT '0',
  `Answer` int DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `fk_questions_userid` (`UserID`),
  CONSTRAINT `fk_questions_userid` FOREIGN KEY (`UserID`) REFERENCES `users` (`ID`)
)