USE MovieDB;

-- 15
-- This query retrieves the name and surname of the director(s) who has directed the most movies from the Movies and Directors tables.
-- It does this by first counting the number of movies directed by each director and then selecting the director(s) with the maximum count.
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