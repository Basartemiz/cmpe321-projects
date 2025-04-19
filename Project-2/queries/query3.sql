USE MovieDB;

-- 3 
-- This query retrieves the movie with the lowest rating from the Movies table.
-- It does this checking a subquery that selects the minimum rating from the Movies table
SELECT M.movie_id,M.title,M.release_date,M.duration,M.director_id,M.rating,M.genre_id,M.budget
FROM Movies M
WHERE M.rating IN (SELECT MIN(M.rating) FROM Movies M);

