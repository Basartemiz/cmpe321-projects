#query 10
# This query cross-joins 'Directors', 'Movies', and 'Genres'. 
# It filters where the movie's release date is between 2020-01-01 and 2024-12-31 (using STR_TO_DATE),
# and where the genre name is 'Sci-Fi'. 
# The results are then ordered by the director's nationality in ascending order.
SELECT director.name, director.surname, director.nationality
FROM Directors director, Movies movie, Genres genre
WHERE movie.director_id = director.director_id 
  AND (STR_TO_DATE(movie.release_date, '%d.%m.%Y')) < '2024-12-31'
  AND (STR_TO_DATE(movie.release_date, '%d.%m.%Y')) > '2020-01-01'
  AND genre.genre_id = movie.genre_id 
  AND genre.genre_name = 'Sci-Fi'
ORDER BY director.nationality ASC;