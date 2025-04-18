USE MovieDB;

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