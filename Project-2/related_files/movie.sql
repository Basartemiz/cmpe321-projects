DROP DATABASE IF EXISTS MovieDB;
CREATE DATABASE MovieDB;
USE MovieDB;

-- Create Tables
CREATE TABLE Directors 
(
    director_id INT PRIMARY KEY,
    name VARCHAR(512),
    surname VARCHAR(512),
    birth_date VARCHAR(512),
    nationality VARCHAR(128)
);

CREATE TABLE Genres 
(
    genre_id INT PRIMARY KEY,
    genre_name VARCHAR(512)
);

CREATE TABLE Movies
(
    movie_id INT PRIMARY KEY,
    title VARCHAR(512),
    release_date VARCHAR(512),
    duration INT,
    director_id INT,
    rating DOUBLE,
    genre_id INT,
    budget INT,
    FOREIGN KEY (director_id) REFERENCES Directors(director_id),
    FOREIGN KEY (genre_id) REFERENCES Genres(genre_id)
);

CREATE TABLE Actors_and_Actresses
(
    actor_id INT PRIMARY KEY,
    name VARCHAR(512),
    surname VARCHAR(512),
    birth_date VARCHAR(512)
);

CREATE TABLE Cast
(
    cast_id INT PRIMARY KEY,
    movie_id INT,
    actor_id INT,
    FOREIGN KEY (movie_id) REFERENCES Movies(movie_id),
    FOREIGN KEY (actor_id) REFERENCES Actors_and_Actresses(actor_id)
);

-- Insert into Directors 
INSERT INTO Directors (director_id, name, surname, birth_date, nationality) VALUES
(1, 'Christopher', 'Nolan', '01.12.1970', 'GB'),
(2, 'Quentin', 'Tarantino', '09.08.1963', 'US'),
(3, 'Steven', 'Spielberg', '06.08.1946', 'US'),
(4, 'Martin', 'Scorsese', '12.09.1942', 'US'),
(5, 'Greta', 'Gerwig', '07.11.1983', 'US'),
(6, 'James', 'Cameron', '26.04.1954', 'CA'),
(7, 'Ridley', 'Scott', '21.01.1937', 'GB'),
(8, 'Francis Ford', 'Coppola', '01.05.1939', 'US'),
(9, 'Peter', 'Jackson', '17.03.1961', 'NZ'),
(10, 'Denis', 'Villeneuve', '18.07.1967', 'CA');

-- Insert into Genres
INSERT INTO Genres (genre_id, genre_name) VALUES
(1, 'Action'),
(2, 'Drama'),
(3, 'Sci-Fi'),
(4, 'Thriller'),
(5, 'Adventure'),
(6, 'Comedy'),
(7, 'Fantasy'),
(8, 'Horror'),
(9, 'Mystery'),
(10, 'Crime');

-- Insert into Movies 
INSERT INTO Movies (movie_id, title, release_date, duration, director_id, rating, genre_id, budget) VALUES
(1, 'Inception', '11.12.2010', 148, 1, 8.8, 3, 160000000),
(2, 'Pulp Fiction', '09.10.1994', 154, 2, 8.9, 10, 8000000),
(3, 'Jurassic Park', '04.05.1993', 127, 3, 8.1, 5, 63000000),
(4, 'The Wolf of Wall Street', '14.09.2013', 180, 4, 8.2, 2, 100000000),
(5, 'Titanic', '23.08.1997', 195, 6, 7.8, 5, 200000000),
(6, 'Gladiator', '09.12.2000', 155, 7, 8.5, 1, 103000000),
(7, 'The Godfather', '12.12.1972', 175, 8, 9.2, 10, 6000000),
(8, 'Interstellar', '24.03.2014', 169, 1, 8.6, 3, 165000000),
(9, 'The Lord of the Rings: The Return of the King', '11.11.2003', 201, 9, 9.0, 7, 94000000),
(10, 'Dune', '10.11.2021', 155, 10, 8.0, 3, 165000000),
(11, 'Barbie', '08.06.2023', 114, 5, 7.5, 6, 145000000),
(12, 'The Dark Knight', '13.05.2008', 152, 1, 9.0, 3, 185000000),
(13, 'Avatar', '27.06.2009', 162, 6, 7.8, 7, 237000000),
(14, 'The Matrix', '25.12.1999', 136, 1, 8.7, 3, 63000000),
(15, 'The Revenant', '21.01.2015', 156, 1, 8.0, 2, 135000000),
(16, 'Mad Max: Fury Road', '06.08.2015', 120, 7, 8.1, 3, 150000000),
(17, 'Star Wars: The Force Awakens', '09.06.2015', 138, 9, 7.8, 7, 245000000),
(18, 'The Social Network', '11.04.2010', 120, 3, 8.1, 2, 40000000),
(19, 'Frozen', '23.08.2013', 102, 10, 7.4, 6, 150000000),
(20, 'Guardians of the Galaxy', '12.09.2014', 121, 1, 8.0, 1, 170000000);

-- Insert into Actors_and_Actresses 
INSERT INTO Actors_and_Actresses (actor_id, name, surname, birth_date) VALUES
(1, 'Leonardo', 'DiCaprio', '12.12.1974'),
(2, 'Samuel L.', 'Jackson', '13.04.1948'),
(3, 'Jeff', 'Goldblum', '05.11.1952'),
(4, 'Margot', 'Robbie', '23.09.1990'),
(5, 'Kate', 'Winslet', '15.01.1975'),
(6, 'Tom', 'Hardy', '17.02.1977'),
(7, 'Russell', 'Crowe', '19.09.1964'),
(8, 'Marlon', 'Brando', '17.08.1924'),
(9, 'Keanu', 'Reeves', '05.01.1964'),
(10, 'Matt', 'Damon', '14.09.1970'),
(11, 'Jessica', 'Chastain', '16.06.1977'),
(12, 'Brad', 'Pitt', '24.02.1963'),
(13, 'Angelina', 'Jolie', '09.08.1975'),
(14, 'Emma', 'Stone', '07.07.1988'),
(15, 'Ryan', 'Gosling', '28.03.1980'),
(16, 'Christian', 'Bale', '15.11.1974'),
(17, 'Jennifer', 'Lawrence', '16.06.1990'),
(18, 'Robert', 'Pattinson', '15.05.1986'),
(19, 'Eddie', 'Redmayne', '13.01.1982'),
(20, 'Tom', 'Hanks', '18.01.1956'),
(21, 'Will', 'Smith', '10.10.1968'),
(22, 'Natalie', 'Portman', '13.11.1981'),
(23, 'Charlize', 'Theron', '12.09.1975'),
(24, 'Ryan', 'Reynolds', '22.11.1976'),
(25, 'Bruce', 'Willis', '14.08.1955'),
(26, 'Julia', 'Roberts', '18.08.1967'),
(27, 'Johnny', 'Depp', '22.11.1963'),
(28, 'Scarlett', 'Johansson', '18.12.1984'),
(29, 'Harrison', 'Ford', '19.01.1942'),
(30, 'Amy', 'Adams', '23.04.1974');

-- Insert into Cast 
INSERT INTO Cast (cast_id, movie_id, actor_id) VALUES
(1, 1, 1),
(2, 1, 6),
(3, 2, 2),
(4, 3, 3),
(5, 4, 4),
(6, 5, 5),
(7, 6, 7),
(8, 7, 8),
(9, 8, 9),
(10, 9, 10),
(11, 1, 2),
(12, 2, 4),
(13, 3, 6),
(14, 4, 1),
(15, 5, 9),
(16, 6, 3),
(17, 7, 5),
(18, 8, 8),
(19, 9, 2),
(20, 10, 7),
(21, 11, 1),
(22, 12, 2),
(23, 13, 4),
(24, 14, 6),
(25, 15, 7),
(26, 16, 8),
(27, 17, 9),
(28, 18, 10),
(29, 19, 1),
(30, 20, 2),
(31, 1, 10),
(32, 2, 3),
(33, 3, 5),
(34, 4, 6),
(35, 5, 4),
(36, 6, 9),
(37, 7, 10),
(38, 8, 7),
(39, 9, 8),
(40, 10, 4),
(41, 11, 5),
(42, 12, 6),
(43, 13, 8),
(44, 14, 3),
(45, 15, 9),
(46, 16, 10),
(47, 17, 6),
(48, 18, 2),
(49, 19, 1),
(50, 20, 3);