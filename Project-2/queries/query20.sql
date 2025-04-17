#query 20
# This query first counts how many times each actor has appeared in each genre 
# by joining 'Actors_and_Actresses', 'Movies', and 'Cast' and grouping by actor_id and movie.genre_id. 
# Then, it groups again by actor_id to see how many distinct genres each actor has played in. 
# A CASE expression labels whether an actor appeared in multiple genres. 
# Finally, the results are ordered by actor surname in descending order.
SELECT actor2.name, actor2.surname, COUNT(distinct genres.genre_id ) AS genre_count,
       CASE WHEN COUNT(*) > 1 THEN 'True' ELSE 'False' END AS multiple_appearance
FROM Actors_and_Actresses actor2 left join
     (SELECT actor.actor_id, movie.genre_id
      FROM Actors_and_Actresses actor,Cast cast
      LEFT JOIN Movies movie ON movie.movie_id = cast.movie_id
      where cast.actor_id=actor.actor_id
      GROUP BY actor.actor_id, movie.genre_id
      ORDER BY actor.actor_id
     ) genres on genres.actor_id=actor2.actor_id

GROUP BY actor2.actor_id
ORDER BY actor2.surname DESC;