USE MovieDB;

-- 5
-- This query calculates the average rating of all movies in the Movies table.
-- It does this by using the AVG function on the rating column of the Movies table.
SELECT AVG(M.rating) as average_rating
FROM Movies M;