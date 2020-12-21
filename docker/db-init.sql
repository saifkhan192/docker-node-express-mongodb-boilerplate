CREATE SCHEMA "main";
SET SCHEMA 'main';

CREATE TABLE Student (
  id            INTEGER,
  name          VARCHAR(20) NOT NULL,
  address       VARCHAR(50),
  PRIMARY KEY (id)
);

INSERT INTO Student VALUES (1001, 'Saifullah Khan', 'Lahore');
INSERT INTO Student VALUES (1002, 'Amanullah Khan', 'Lahore');
INSERT INTO Student VALUES (1003, 'Jafar Khan',  'ISB');
INSERT INTO Student VALUES (1004, 'Ahsan Khan', 'Karachi');
INSERT INTO Student VALUES (1005, 'Ali Khan',  'Pindi');

CREATE TABLE contactus (
  id            INTEGER,
  name          VARCHAR(20) NOT NULL,
  address       VARCHAR(50),
  PRIMARY KEY (id)
);
