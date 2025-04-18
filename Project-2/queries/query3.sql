USE MovieDB;

-- 3 
SELECT M.movie_id,M.title,M.release_date,M.duration,M.director_id,M.rating,M.genre_id,M.budget
FROM Movies M
WHERE M.rating IN (SELECT MIN(M.rating) FROM Movies M);
Select AVG(M.rating) as aver_age_rating
FROM Movies M;
