#query 4
# This query uses a nested subquery to find the maximum rating from the 'movies' table. 
# It then selects all movies with that maximum rating and orders them by budget in ascending order.
SELECT movie.title, movie.rating, movie.budget
FROM movies movie
WHERE movie.rating = (SELECT MAX(movie.rating) FROM movies movie)
ORDER BY movie.budget ASC;