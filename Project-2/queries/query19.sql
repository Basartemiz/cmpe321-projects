USE MovieDB;

-- 19
-- This query retrieves the genre with the highest average rating from the Movies table.
-- It does this by calculating the average rating for each genre and then selecting the genre with the maximum average rating.
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