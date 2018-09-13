DROP DATABASE IF EXISTS game_top;
CREATE DATABASE game_top;

CREATE TABLE deaths (

	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL,
    time INT NOT NULL,
    causeOfDeath VARCHAR(30) NOT NULL,
    dateCreated DATETIME,
    
    primary key (id)

);