CREATE TABLE `answers` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `QuestionID` int NOT NULL,
  `UserID` int NOT NULL,
  `Date` datetime NOT NULL,
  `Likes` int DEFAULT NULL,
  `Dislikes` int DEFAULT NULL,
  `Answer` varchar(2000) NOT NULL,
  `Edited` int DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `fk_answers_userid` (`UserID`),
  KEY `fk_answers_questionid` (`QuestionID`),
  CONSTRAINT `fk_answers_questionid` FOREIGN KEY (`QuestionID`) REFERENCES `questions` (`ID`),
  CONSTRAINT `fk_answers_userid` FOREIGN KEY (`UserID`) REFERENCES `users` (`ID`)
)