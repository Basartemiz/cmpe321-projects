USE MovieDB;

-- 1
SELECT count(*) AS movie_count
FROM Movies;
 
-- 3 
SELECT M.movie_id,M.title,M.release_date,M.duration,M.director_id,M.rating,M.genre_id,M.budget
FROM Movies M
WHERE M.rating IN (SELECT MIN(M.rating) FROM Movies M);
Select AVG(M.rating) as aver_age_rating
FROM Movies M;

-- 5
SELECT AVG(M.rating) as average_rating
FROM Movies M;

-- 7
SELECT A.actor_id,A.name,A.surname,A.birth_date
FROM Actors_and_Actresses A
WHERE SUBSTRING(A.surname, 1, 1) = 'P';

-- 9
SELECT A.name,A.surname
FROM Actors_and_Actresses A
WHERE SUBSTRING(A.birth_date,7,10) IN (SELECT SUBSTRING(A.birth_date,7,10) FROM Actors_and_Actresses A WHERE CONCAT(A.name,' ',A.surname) = 'Amy Adams')
ORDER BY A.surname ASC;

-- 11
SELECT M.movie_id, M.title, M.release_date, M.duration, M.director_id, M.rating, M.genre_id, M.budget
FROM Movies M, Directors D
WHERE M.director_id = D.director_id AND CONCAT(D.name,' ',D.surname) = 'Christopher Nolan' AND M.duration > 120
ORDER BY M.movie_id DESC;

-- 13
SELECT DISTINCT G.genre_name,D.name, D.surname ,(
	SELECT count(*)
	FROM Movies M2
	WHERE D.director_id = M2.director_id AND G.genre_id = M2.genre_id
  ) as directed_count
FROM Directors D, Movies M, Genres G
WHERE D.director_id = M.director_id AND M.genre_id = G.genre_id
  AND 
  (
	SELECT count(*)
	FROM Movies M2
	WHERE D.director_id = M2.director_id AND G.genre_id = M2.genre_id
  )
  = 
  ( SELECT MAX(A.number)
	FROM (SELECT count(*) as number
	FROM Movies M2
	WHERE D.director_id = M2.director_id AND G.genre_id = M2.genre_id) A
  ); 

-- 15
WITH Director_and_count AS (
  SELECT D.director_id ,D.name ,D.surname , COUNT(M.movie_id) AS movie_count
  FROM Movies M, Directors D
  WHERE M.director_id = D.director_id
  GROUP BY M.director_id
)
SELECT DC.name ,DC.surname , DC.movie_count
FROM Director_and_count DC
GROUP BY DC.director_id
HAVING DC.movie_count in (
SELECT MAX(DC.movie_count)
FROM Director_and_count DC
);

-- 17
SELECT M.movie_id, M.title as movie_name, M.duration, M.rating, D.name as director_name
FROM Movies M, Directors D
WHERE M.director_id = D.director_id AND M.duration > 150 AND M.rating > 8.0
ORDER BY D.name DESC;

-- 19
WITH Genre_and_avg AS (
  SELECT G.genre_id ,G.genre_name , AVG(M.rating) AS average_rating
  FROM Movies M, Genres G
  WHERE M.genre_id = G.genre_id
  GROUP BY M.genre_id
)
SELECT DC.genre_id ,DC.genre_name , DC.average_rating
FROM Genre_and_avg DC
GROUP BY DC.genre_id
HAVING DC.average_rating in (
SELECT MAX(DC.average_rating)
FROM Genre_and_avg DC
);

