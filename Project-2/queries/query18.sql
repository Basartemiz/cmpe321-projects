#query 18
# This query first uses a subquery that groups directors by both director_id and movie.genre_id, 
# producing one row for each distinct director-genre combination. 
# The main query then groups by director_id to count how many distinct genres each director has worked in. 
# It only returns those directors who have more than one genre, and sorts them by that genre count in descending order.
SELECT director2.director_id, director2.name AS name, director2.surname AS surname, COUNT(*) AS genre_count
FROM Directors director2,
     (SELECT director.director_id
      FROM Directors director, Movies movie
      WHERE director.director_id = movie.director_id
      GROUP BY director.director_id, movie.genre_id
     ) genres
WHERE director2.director_id = genres.director_id
GROUP BY director2.director_id
HAVING COUNT(*) > 1
ORDER BY COUNT(*) DESC;