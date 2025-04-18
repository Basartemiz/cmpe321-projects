USE MovieDB;

-- 11
SELECT M.movie_id, M.title, M.release_date, M.duration, M.director_id, M.rating, M.genre_id, M.budget
FROM Movies M, Directors D
WHERE M.director_id = D.director_id AND CONCAT(D.name,' ',D.surname) = 'Christopher Nolan' AND M.duration > 120
ORDER BY M.movie_id DESC;