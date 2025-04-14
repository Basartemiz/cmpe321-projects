#query 16
# This query cross-joins 'Actors_and_Actresses', 'Movies', and 'Cast'. 
# It filters where the actor_id and movie_id match up in both tables, 
# then uses GROUP BY on actor_id to calculate the average rating of movies for each actor. 
# The results are ordered by this average rating in descending order.
SELECT actor.name, actor.surname, AVG(movie.rating) AS average_rating
FROM Actors_and_Actresses actor, Movies movie, Cast cast
WHERE movie.movie_id = cast.movie_id 
  AND actor.actor_id = cast.actor_id
GROUP BY actor.actor_id
ORDER BY AVG(movie.rating) DESC;