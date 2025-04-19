USE MovieDB;

-- 17
-- This query retrives all movies with a duration greater than 150 minutes and a rating greater than 8.0.
-- It does this by checking the duration and rating of the movies and ordering the results by director name in descending order.
SELECT M.movie_id, M.title as movie_name, M.duration, M.rating, D.name as director_name
FROM Movies M, Directors D
WHERE M.director_id = D.director_id AND M.duration > 150 AND M.rating > 8.0
ORDER BY D.name DESC;