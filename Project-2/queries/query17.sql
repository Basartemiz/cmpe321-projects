USE MovieDB;

-- 17
SELECT M.movie_id, M.title as movie_name, M.duration, M.rating, D.name as director_name
FROM Movies M, Directors D
WHERE M.director_id = D.director_id AND M.duration > 150 AND M.rating > 8.0
ORDER BY D.name DESC;