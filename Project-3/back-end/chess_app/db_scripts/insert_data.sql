/* -----------------------------------------------------------
   make sure we are in the right schema
----------------------------------------------------------- */
USE chess_database;

SET foreign_key_checks = 0;

/* -----------------------------------------------------------
   1.  Titles
----------------------------------------------------------- */
INSERT INTO Titles (title_id, title_name) VALUES
  (1, 'Grandmaster'),
  (2, 'International Master'),
  (3, 'FIDE Master'),
  (4, 'Candidate Master'),
  (5, 'National Master');

/* -----------------------------------------------------------
   2.  DBManagers
----------------------------------------------------------- */
INSERT INTO DBManagers (username, password) VALUES
  ('kevin',   'K3v!n#2024'),
  ('bob',     'Bob@Secure88'),
  ('admin1',  '326593'),
  ('jessica', 'secretpw.33#'),
  ('admin2',  'admin2pw'),
  ('fatima',  'F4tima!DBmngr'),
  ('yusuf',   'Yu$ufSecure1'),
  ('maria',   'M@r1a321');

/* -----------------------------------------------------------
   3.  Players  (49 rows)
   columns: username, password, name, surname, nationality,
            date_of_birth, fide_id, elo_rating, title_id
----------------------------------------------------------- */
INSERT INTO Players
(username,password,name,surname,nationality,date_of_birth,fide_id,elo_rating,title_id) VALUES
  ('alice','Pass@123','Alice','Smith','USA','2000-05-10','FIDE001',2200,1),
  ('bob1','Bob@2023','Bob','Jones','UK','1998-07-21','FIDE002',2100,5),
  ('clara','Clara#21','Clara','Kim','KOR','2001-03-15','FIDE003',2300,2),
  ('david','D@vid2024','David','Chen','CAN','1997-12-02','FIDE004',2050,3),
  ('emma','Emm@9win','Emma','Rossi','ITA','1999-06-19','FIDE005',2250,2),
  ('felix','F3lix$88','Felix','Novak','GER','2002-09-04','FIDE006',2180,4),
  ('grace','Gr@ce2025','Grace','Ali','TUR','2000-08-12','FIDE007',2320,1),
  ('henry','Hen!ry777','Henry','Patel','IND','1998-04-25','FIDE008',2150,3),
  ('isabel','Isa#Blue','Isabel','Lopez','MEX','2001-02-17','FIDE009',2240,3),
  ('jack','Jack@321','Jack','Brown','USA','1997-11-30','FIDE010',2000,4),
  ('kara','Kara$99','Kara','Singh','IND','2003-01-07','FIDE011',2350,5),
  ('liam','Li@mChess','Liam','Müller','GER','1999-05-23','FIDE012',2200,2),
  ('mia','M!a2020','Mia','Wang','CHN','2002-12-14','FIDE013',2125,4),
  ('noah','Noah#44','Noah','Evans','CAN','1996-08-08','FIDE014',2400,1),
  ('olivia','Oliv@99','Olivia','Taylor','UK','2001-06-03','FIDE015',2280,2),
  ('peter','P3ter!1','Peter','Dubois','FRA','2000-10-11','FIDE016',2140,3),
  ('quinn','Quinn%x','Quinn','Ma','CHN','1998-09-16','FIDE017',2210,4),
  ('rachel','Rach3l@','Rachel','Silva','BRA','1999-07-06','FIDE018',2290,2),
  ('sam','S@mWise','Sam','O''Neill','IRE','2002-01-29','FIDE019',2100,3),
  ('tina','T!naChess','Tina','Zhou','KOR','2003-03-13','FIDE020',2230,3),
  ('umar','Umar$22','Umar','Haddad','UAE','1997-11-01','FIDE021',2165,4),
  ('vera','V3ra#21','Vera','Nowak','POL','2001-04-22','FIDE022',2260,2),
  ('will','Will@321','Will','Johnson','AUS','2000-06-18','FIDE023',2195,3),
  ('xena','Xena$!','Xena','Popov','RUS','1998-02-09','FIDE024',2330,1),
  ('yusuf','Yusuf88@','Yusuf','Demir','TUR','1999-12-26','FIDE025',2170,4),
  ('zoe','Zo3!pass','Zoe','Tanaka','JPN','2001-05-05','FIDE026',2220,2),
  ('hakan','H@kan44','Hakan','Şimşek','TUR','1997-10-14','FIDE027',2110,4),
  ('julia','J!ulia77','Julia','Nilsen','SWE','2002-03-02','FIDE028',2300,1),
  ('mehmet','Mehmet#1','Mehmet','Yıldız','TUR','1998-07-31','FIDE029',2080,3),
  ('elena','El3na@pw','Elena','Kuznetsova','RUS','2000-09-24','FIDE030',2345,1),
  ('nina','Nina@2024','Nina','Martinez','ESP','2001-07-12','FIDE031',2150,3),
  ('louis','Louis#88','Louis','Schneider','GER','1998-11-08','FIDE032',2100,4),
  ('sofia','Sofia$22','Sofia','Russo','ITA','2000-02-17','FIDE033',2250,2),
  ('ryan','Ryan@77','Ryan','Edwards','USA','1997-09-02','FIDE034',2170,3),
  ('claire','Claire#01','Claire','Dupont','FRA','2002-01-11','FIDE035',2225,2),
  ('jacob','Jacob!pass','Jacob','Green','AUS','1999-10-20','FIDE036',2120,4),
  ('ava','Ava@Chess','Ava','Kowalski','POL','2003-05-04','FIDE037',2300,2),
  ('ethan','Ethan$win','Ethan','Yamamoto','JPN','1998-03-25','FIDE038',2190,3),
  ('isabella','Isabell#77','Isabella','Moretti','ITA','2001-08-19','FIDE039',2240,2),
  ('logan','Logan@55','Logan','O''Connor','IRL','1997-04-14','FIDE040',2115,4),
  ('sophia','Sophia$12','Sophia','Weber','GER','2000-06-01','FIDE041',2280,2),
  ('lucas','Lucas!88','Lucas','Novak','CZE','1999-12-30','FIDE042',2145,4),
  ('harper','Harper@pw','Harper','Clarke','UK','2002-07-06','FIDE043',2200,2),
  ('james','James!44','James','Silva','BRA','1998-03-21','FIDE044',2155,3),
  ('amelia','Amelia#99','Amelia','Zhang','CHN','2001-09-09','FIDE045',2275,2),
  ('benjamin','Ben@2023','Benjamin','Fischer','GER','1997-01-27','FIDE046',2095,4),
  ('ella','Ella@pw','Ella','Svensson','SWE','2000-11-03','FIDE047',2235,2),
  ('alex','Alex$88','Alex','Dimitrov','BUL','1999-05-22','FIDE048',2180,3),
  ('lily','Lily@sun','Lily','Nakamura','USA','2003-02-12','FIDE049',2310,2);


  INSERT INTO PlayerTeams (username, team_id) VALUES
  ('alice', 1),
  ('bob1', 2),
  ('clara', 3),
  ('david', 4),
  ('emma', 5),
  ('felix', 6),
  ('grace', 7),
  ('henry', 8),
  ('isabel', 9),
  ('jack', 10),
  ('kara', 1),
  ('liam', 2),
  ('mia', 3),
  ('noah', 4),
  ('olivia', 5),
  ('peter', 6),
  ('quinn', 7),
  ('rachel', 8),
  ('sam', 9),
  ('tina', 10),
  ('umar', 1),
  ('vera', 2),
  ('will', 3),
  ('xena', 4),
  ('yusuf', 5),
  ('zoe', 6),
  ('hakan', 7),
  ('julia', 8),
  ('mehmet', 9),
  ('elena', 10),
  ('nina', 1),
  ('louis', 2),
  ('sofia', 3),
  ('ryan', 4),
  ('claire', 5),
  ('jacob', 6),
  ('ava', 7),
  ('ethan', 8),
  ('isabella', 9),
  ('logan', 10),
  ('sophia', 1),
  ('lucas', 2),
  ('harper', 3),
  ('james', 4),
  ('amelia', 5),
  ('benjamin', 6),
  ('ella', 7),
  ('alex', 8),
  ('lily', 9);

/* -----------------------------------------------------------
   Coaches  (10 rows)
----------------------------------------------------------- */
INSERT INTO Coaches
(username, password, name, surname, nationality,
 team_id, contract_start, contract_finish) VALUES
  ('carol',        'coachpw',  'Carol',    'White',   'Canada',  1, '2023-01-01', '2026-01-01'),
  ('david_b',      'dPass!99', 'David',    'Brown',   'USA',     2, '2024-02-15', '2026-02-15'),
  ('emma_green',   'E@mma77',  'Emma',     'Green',   'UK',      3, '2022-03-01', '2025-03-01'),
  ('fatih',        'FatihC21', 'Fatih',    'Ceylan',  'Turkey',  4, '2024-05-10', '2026-05-10'),
  ('hana',         'Hana$45',  'Hana',     'Yamada',  'Japan',   5, '2023-04-01', '2024-10-01'),
  ('lucaas',       'Lucas#1',  'Lucas',    'Müller',  'Germany', 6, '2024-01-01', '2025-01-01'),
  ('mia_rose',     'Mia!888',  'Mia',      'Rossi',   'Italy',   7, '2024-06-01', '2025-06-01'),
  ('onur',         'onUr@32',  'Onur',     'Kaya',    'Turkey',  8, '2023-03-15', '2025-09-15'),
  ('sofia_lop',    'S0fia#',   'Sofia',    'López',   'Spain',   9, '2024-05-01', '2025-11-01'),
  ('arslan_yusuf', 'Yusuf199', 'Yusuf',    'Arslan',  'Turkey', 10, '2024-02-01', '2026-08-01');

/* -----------------------------------------------------------
   CoachCertifications  (13 rows)
----------------------------------------------------------- */
INSERT INTO CoachCertifications (coach_username, certification) VALUES
  ('carol',        'FIDE Certified'),
  ('carol',        'National Level'),
  ('david_b',      'National Level'),
  ('emma_green',   'FIDE Certified'),
  ('fatih',        'National Level'),
  ('hana',         'Regional Certified'),
  ('lucaas',       'Club Level'),
  ('lucaas',       'Regional Certified'),
  ('mia_rose',     'FIDE Certified'),
  ('onur',         'National Level'),
  ('sofia_lop',    'Regional Certified'),
  ('arslan_yusuf', 'Club Level'),
  ('arslan_yusuf', 'National Level');

  INSERT INTO Sponsors (sponsor_id, sponsor_name) VALUES
  (100, 'ChessVision'),
  (101, 'Grandmaster Corp'),
  (102, 'Queen''s Gambit Ltd.'),
  (103, 'MateMate Inc.'),
  (104, 'RookTech'),
  (105, 'PawnPower Solutions'),
  (106, 'CheckSecure AG'),
  (107, 'Endgame Enterprises'),
  (108, 'King''s Arena Foundation');

/* -----------------------------------------------------------------
   Teams   (must reference the sponsor_id’s above)
----------------------------------------------------------------- */
INSERT INTO Teams (team_id, team_name, sponsor_id) VALUES
  (1,  'Knights',       100),
  (2,  'Rooks',         101),
  (3,  'Bishops',       102),
  (4,  'Pawns',         100),
  (5,  'Queens',        103),
  (6,  'Kings',         104),
  (7,  'Castles',       101),
  (8,  'Checkmates',    105),
  (9,  'En Passants',   106),
  (10, 'Blitz Masters', 107);

/* -----------------------------------------------------------------
   Arbiters
----------------------------------------------------------------- */
INSERT INTO Arbiters
(username, password, name, surname, nationality, experience_level) VALUES
  ('erin',    'arbpw',    'Erin',    'Gray',    'Germany',     'Advanced'),
  ('mark',    'refpass',  'Mark',    'Blake',   'USA',         'Intermediate'),
  ('lucy',    'arb123',   'Lucy',    'Wang',    'China',       'Expert'),
  ('ahmet',   'pass2024', 'Ahmet',   'Yılmaz',  'Turkey',      'Beginner'),
  ('ana',     'secretpw', 'Ana',     'Costa',   'Brazil',      'Advanced'),
  ('james',   'secure1',  'James',   'Taylor',  'UK',          'Intermediate'),
  ('sara',    'sara!2024','Sara',    'Kim',     'South Korea', 'Expert'),
  ('mohamed', 'mpass',    'Mohamed', 'Farouk',  'Egypt',       'Advanced');

/* -----------------------------------------------------------------
   ArbiterCertifications
----------------------------------------------------------------- */
INSERT INTO ArbiterCertifications (arbiter_username, certification) VALUES
  ('erin',    'FIDE Certified'),
  ('mark',    'National Arbiter'),
  ('lucy',    'International Arbiter'),
  ('ahmet',   'Local Certification'),
  ('ana',     'FIDE Certified'),
  ('james',   'Regional Certification'),
  ('sara',    'International Arbiter'),
  ('mohamed', 'National Arbiter');

/* -----------------------------------------------------------------
   Halls
----------------------------------------------------------------- */
INSERT INTO Halls (hall_id, hall_name, country, capacity) VALUES
  (1,  'Grandmaster Arena',  'USA',        10),
  (2,  'Royal Chess Hall',   'UK',          8),
  (3,  'FIDE Dome',          'Germany',    12),
  (4,  'Masters Pavilion',   'Turkey',      6),
  (5,  'Checkmate Center',   'France',      9),
  (6,  'ELO Stadium',        'Spain',      10),
  (7,  'Tactical Grounds',   'Italy',       7),
  (8,  'Endgame Hall',       'India',       8),
  (9,  'Strategic Square',   'Canada',      6),
  (10, 'Opening Hall',       'Japan',       5);

/* -----------------------------------------------------------------
   Tables (physical chess tables)  – 16 rows
----------------------------------------------------------------- */
INSERT INTO Tables (table_id, hall_id) VALUES
  (1, 1),
  (2, 1),
  (3, 1),
  (4, 2),
  (5, 2),
  (6, 3),
  (7, 3),
  (8, 3),
  (9, 4),
  (10,5),
  (11,6),
  (12,6),
  (13,7),
  (14,8),
  (15,9),
  (16,10);

/* -----------------------------------------------------------------
   Matches   (20 rows)
   dd-mm-yyyy  ➜  yyyy-mm-dd
   “8,2”       ➜  8.2   (DECIMAL)
----------------------------------------------------------------- */
INSERT INTO Matches
(match_id, match_date, time_slot, hall_id, table_id,
 team1_id, team2_id, arbiter_username, ratings) VALUES
  ( 1, '2025-02-01', 1, 1,  1,  1,  2, 'erin',    8.2),
  ( 2, '2025-02-01', 3, 1,  2,  3,  4, 'lucy',    7.9),
  ( 3, '2025-02-02', 1, 2,  1,  5,  6, 'mark',    NULL),
  ( 4, '2025-02-02', 3, 2,  2,  7,  8, 'erin',    8.5),
  ( 5, '2025-02-03', 1, 3,  1,  9, 10, 'lucy',    NULL),
  ( 6, '2025-02-03', 3, 3,  2,  1,  3, 'mohamed', NULL),
  ( 7, '2025-02-04', 1, 4,  1,  2,  5, 'erin',    4.5),
  ( 8, '2025-02-04', 3, 4,  2,  6,  7, 'sara',    3.1),
  ( 9, '2025-02-05', 1, 5,  1,  8,  9, 'ana',     7.7),
  (10, '2025-02-05', 3, 5,  2, 10,  1, 'mark',    6.4),
  (11, '2025-02-06', 1, 1,  1,  3,  5, 'james',   5.1),
  (12, '2025-02-06', 3, 1,  2,  4,  6, 'lucy',    NULL),
  (13, '2025-02-07', 1, 2,  1,  7,  9, 'sara',    NULL),
  (14, '2025-02-07', 3, 2,  2,  8, 10, 'mohamed', 2.6),
  (15, '2025-02-08', 1, 3,  1,  1,  4, 'erin',    7.1),
  (16, '2025-02-08', 3, 3,  2,  2,  5, 'ana',     6.3),
  (17, '2025-02-09', 1, 4,  1,  3,  6, 'james',   NULL),
  (18, '2025-02-09', 3, 4,  2,  7, 10, 'mark',    4.9),
  (19, '2025-02-10', 1, 5,  1,  5,  8, 'lucy',    9.7),
  (20, '2025-02-10', 3, 5,  2,  6,  9, 'ahmet',   7.4);

  SET foreign_key_checks = 1;