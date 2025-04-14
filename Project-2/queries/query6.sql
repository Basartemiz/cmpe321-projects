
#query 6
# This query performs a cross product of 'Actors_and_Actresses' and 'Cast'. 
# It filters to only those rows where the actor_id matches in both tables, avoiding duplicates. 
# Using GROUP BY on actor_id allows the COUNT function to determine how many movies each actor has participated in. 
# The results are ordered by the movie count in descending order.
SELECT actor.name AS actor_name, 
       actor.surname AS actor_surname, 
       COUNT(cast.movie_id) AS movie_count
FROM Actors_and_Actresses actor
LEFT JOIN Cast cast ON actor.actor_id = cast.actor_id
GROUP BY actor.actor_id
ORDER BY movie_count DESC;