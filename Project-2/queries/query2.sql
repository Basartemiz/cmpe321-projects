query 2
# This query uses STR_TO_DATE to compare release dates with '2024-01-01'. 
# It also formats the release_date in 'DD/MM/YYYY' using DATE_FORMAT. 
# Finally, the movies are ordered by their release date in descending order.
SELECT movie.movie_id, movie.title, movie.duration, movie.rating, movie.director_id, 
       DATE_FORMAT(STR_TO_DATE(movie.release_date, '%d.%m.%Y'), '%d/%m/%Y') AS date
FROM movies movie
WHERE STR_TO_DATE(movie.release_date, '%d.%m.%Y') < '2024-01-01'
ORDER BY STR_TO_DATE(movie.release_date, '%d.%m.%Y') DESC;
