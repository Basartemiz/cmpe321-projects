/* -----------------------------------------------------------
   DATABASE
----------------------------------------------------------- */
drop DATABASE IF EXISTS chess_database;
create database chess_database;
USE chess_database;

/* -----------------------------------------------------------
   DBManagers
----------------------------------------------------------- */
CREATE TABLE IF NOT EXISTS DBManagers (
    username  CHAR(50)  NOT NULL,
    password  CHAR(50)  NOT NULL,
    PRIMARY KEY (username)
);

/* -----------------------------------------------------------
   Titles
----------------------------------------------------------- */
CREATE TABLE IF NOT EXISTS Titles (
    title_id   INT        NOT NULL,
    title_name CHAR(50)   NOT NULL,
    PRIMARY KEY (title_id)
);

/* -----------------------------------------------------------
   Sponsors
----------------------------------------------------------- */
CREATE TABLE IF NOT EXISTS Sponsors (
    sponsor_id   INT        NOT NULL,
    sponsor_name CHAR(50)   NOT NULL,
    PRIMARY KEY (sponsor_id)
);

/* -----------------------------------------------------------
   Players
----------------------------------------------------------- */
CREATE TABLE IF NOT EXISTS Players (
    username       VARCHAR(50)  NOT NULL,
    password       VARCHAR(128) NOT NULL,
    name           VARCHAR(50)  NOT NULL,
    surname        VARCHAR(50)  NOT NULL,
    nationality    VARCHAR(50),
    date_of_birth  DATE,
    fide_id        VARCHAR(50)          UNIQUE,
    elo_rating     INT,
    title_id       INT,
    PRIMARY KEY (username),
    CONSTRAINT foreign_key_title
        FOREIGN KEY (title_id)
        REFERENCES Titles(title_id)
        ON UPDATE CASCADE
        ON DELETE SET NULL
);

/* -----------------------------------------------------------
   Teams
----------------------------------------------------------- */
CREATE TABLE IF NOT EXISTS Teams (
    team_id     INT         NOT NULL,
    team_name   VARCHAR(50) NOT NULL,
    sponsor_id  INT         NOT NULL,
    PRIMARY KEY (team_id),
    CONSTRAINT foreign_ket_sponsor
        FOREIGN KEY (sponsor_id)
        REFERENCES Sponsors(sponsor_id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

/* -----------------------------------------------------------
   PlayerTeams  (junction)
----------------------------------------------------------- */
CREATE TABLE IF NOT EXISTS PlayerTeams (
    username VARCHAR(50) NOT NULL,
    team_id  INT         NOT NULL,
    PRIMARY KEY (username, team_id),
    CONSTRAINT foreign_key_player
        FOREIGN KEY (username)
        REFERENCES Players(username)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT foreign_key_team
        FOREIGN KEY (team_id)
        REFERENCES Teams(team_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

/* -----------------------------------------------------------
   Coaches
----------------------------------------------------------- */
CREATE TABLE IF NOT EXISTS Coaches (
    username        VARCHAR(50)  NOT NULL,
    password        VARCHAR(128) NOT NULL,
    name            VARCHAR(50)  NOT NULL,
    surname         VARCHAR(50)  NOT NULL,
    nationality     VARCHAR(50),
    team_id         INT          NOT NULL,
    contract_start  DATE         NOT NULL,
    contract_finish DATE         NOT NULL,
    PRIMARY KEY (username),
    CONSTRAINT foreign_key_team
        FOREIGN KEY (team_id)
        REFERENCES Teams(team_id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

/* -----------------------------------------------------------
   CoachCertifications
----------------------------------------------------------- */
CREATE TABLE IF NOT EXISTS CoachCertifications (
    coach_username   VARCHAR(50) NOT NULL,
    certification    CHAR(50)    NOT NULL,
    PRIMARY KEY (coach_username, certification),
    CONSTRAINT foreing_key_coach
        FOREIGN KEY (coach_username)
        REFERENCES Coaches(username)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

/* -----------------------------------------------------------
   Arbiters
----------------------------------------------------------- */
CREATE TABLE IF NOT EXISTS Arbiters (
    username          VARCHAR(50)  NOT NULL,
    password          VARCHAR(128) NOT NULL,
    name              VARCHAR(50)  NOT NULL,
    surname           VARCHAR(50)  NOT NULL,
    nationality       VARCHAR(50),
    experience_level  VARCHAR(50),
    PRIMARY KEY (username)
);

/* -----------------------------------------------------------
   ArbiterCertifications
----------------------------------------------------------- */
CREATE TABLE IF NOT EXISTS ArbiterCertifications (
    arbiter_username VARCHAR(50) NOT NULL,
    certification    CHAR(50)    NOT NULL,
    PRIMARY KEY (arbiter_username, certification),
    CONSTRAINT foreign_key_arbiter
        FOREIGN KEY (arbiter_username)
        REFERENCES Arbiters(username)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

/* -----------------------------------------------------------
   Halls
----------------------------------------------------------- */
CREATE TABLE IF NOT EXISTS Halls (
    hall_id    INT         NOT NULL,
    hall_name  VARCHAR(50) NOT NULL,
    country    VARCHAR(50) NOT NULL,
    capacity   INT         NOT NULL,
    PRIMARY KEY (hall_id)
);

/* -----------------------------------------------------------
   Tables (physical chess tables)
----------------------------------------------------------- */
CREATE TABLE IF NOT EXISTS Tables (
    table_id INT NOT NULL,
    hall_id  INT NOT NULL,
    PRIMARY KEY (table_id),
    CONSTRAINT foreing_key_table
        FOREIGN KEY (hall_id)
        REFERENCES Halls(hall_id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

/* -----------------------------------------------------------
   Matches
----------------------------------------------------------- */
CREATE TABLE IF NOT EXISTS Matches (
    match_id         INT          NOT NULL,
    match_date       DATE         NOT NULL,
    time_slot        TINYINT      NOT NULL,
    hall_id          INT          NOT NULL,
    table_id         INT          NOT NULL,
    team1_id         INT          NOT NULL,
    team2_id         INT          NOT NULL,
    arbiter_username VARCHAR(50)  NOT NULL,
    ratings          DECIMAL(3,1),
    PRIMARY KEY (match_id),

    CONSTRAINT foreign_key_match
        FOREIGN KEY (hall_id)
        REFERENCES Halls(hall_id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,

    CONSTRAINT foreign_key_table
        FOREIGN KEY (table_id)
        REFERENCES Tables(table_id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,

    CONSTRAINT foreign_key_team
        FOREIGN KEY (team1_id)
        REFERENCES Teams(team_id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,

    CONSTRAINT foreign_key_team
        FOREIGN KEY (team2_id)
        REFERENCES Teams(team_id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,

    CONSTRAINT foreign_key_arbiter
        FOREIGN KEY (arbiter_username)
        REFERENCES Arbiters(username)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);
    
    

