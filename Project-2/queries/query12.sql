#query 12
# This query extracts the release year of each movie using the YEAR function on STR_TO_DATE. 
# It compares each movie's rating to the maximum rating for that same year. 
# If the movie matches that maximum rating, it is returned. 
# Finally, the output is ordered by the release year in ascending order.
SELECT director.name as name, director.surname as surname,movie.title AS movie_name, 
       YEAR(STR_TO_DATE(movie.release_date, '%d.%m.%Y')) AS release_year, 
       movie.rating
FROM Directors director, Movies movie
WHERE director.director_id = movie.director_id 
  AND movie.rating = (
      SELECT MAX(movie2.rating)
      FROM Directors director2, Movies movie2
      WHERE director2.director_id = movie2.director_id 
        AND YEAR(STR_TO_DATE(movie2.release_date, '%d.%m.%Y')) = YEAR(STR_TO_DATE(movie.release_date, '%d.%m.%Y'))
  )
ORDER BY YEAR(STR_TO_DATE(movie.release_date, '%d.%m.%Y')) ASC; 