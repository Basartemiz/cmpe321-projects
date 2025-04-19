USE MovieDB;

-- 11
-- This query retrieves all movies directed by Christopher Nolan that have a duration greater than 120 minutes.
-- It does this by checking the name and surname and the duration of the movies.
SELECT M.movie_id, M.title, M.release_date, M.duration, M.director_id, M.rating, M.genre_id, M.budget
FROM Movies M, Directors D
WHERE M.director_id = D.director_id AND CONCAT(D.name,' ',D.surname) = 'Christopher Nolan' AND M.duration > 120
ORDER BY M.movie_id DESC;