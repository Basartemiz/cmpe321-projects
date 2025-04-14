#query 14
# This query selects movies released in or after 2010 (using YEAR on the release_date). 
# It excludes those directed by Christopher Nolan, and finally orders the results by movie_id in ascending order.
SELECT movie.movie_id, movie.title, director.name AS director_name, director.surname director_surname
FROM Movies movie, Directors director
WHERE movie.director_id = director.director_id 
  AND YEAR(STR_TO_DATE(movie.release_date, '%d.%m.%Y')) >= 2010
  AND NOT (director.name = 'Christopher' AND director.surname = 'Nolan')
ORDER BY movie_id ASC;