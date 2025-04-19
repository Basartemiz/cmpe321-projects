USE MovieDB;

-- 13
-- Fınds who directed most movies for each genre.
-- To create this query, numerous subqueries were used.
SELECT DISTINCT G.genre_name,D.name, D.surname ,(
	SELECT count(*)
	FROM Movies M2
	WHERE D.director_id = M2.director_id AND G.genre_id = M2.genre_id
  ) as directed_count
FROM Directors D, Movies M, Genres G
WHERE D.director_id = M.director_id AND M.genre_id = G.genre_id
  AND 
  (
	SELECT count(*)
	FROM Movies M2
	WHERE D.director_id = M2.director_id AND G.genre_id = M2.genre_id
  )
  = 
  ( SELECT MAX(A.number)
	FROM (SELECT count(*) as number
	FROM Movies M2
	WHERE D.director_id = M2.director_id AND G.genre_id = M2.genre_id) A
  ); 