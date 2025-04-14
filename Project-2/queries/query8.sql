#query 8
# This query cross-joins 'Directors' and 'Movies', selecting records where director_id matches in both. 
# It groups by director_id and uses COUNT(*) to find the total number of movies each director has made. 
# Only directors with at least 3 movies are included (via HAVING). 
# Finally, the results are ordered by the director's surname in descending order.
SELECT director.name, director.surname
FROM Directors director, Movies movie
WHERE director.director_id = movie.director_id 
GROUP BY director.director_id
HAVING COUNT(*) >= 3;
ORDER BY director.surname DESC