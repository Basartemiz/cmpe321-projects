#query 16
# This query cross-joins 'Actors_and_Actresses', 'Movies', and 'Cast'. 
# It filters where the actor_id and movie_id match up in both tables, 
# then uses GROUP BY on actor_id to calculate the average rating of movies for each actor. 
# The results are ordered by this average rating in descending order.
#used CTE in order to write clean code


WITH uniqueMovies AS (
  SELECT DISTINCT actor.actor_id, actor.name, actor.surname, movie.movie_id, movie.rating
  FROM Actors_and_Actresses actor
  JOIN Cast cast ON actor.actor_id = cast.actor_id
  JOIN Movies movie ON movie.movie_id = cast.movie_id
)
SELECT actor_id, name, surname, AVG(rating) AS average_rating
FROM UniqueMovies
GROUP BY actor_id, name, surname
ORDER BY average_rating DESC;