USE MovieDB;

-- 9
-- This query retrieves the names and surnames of actors and actresses who share the same birth year as 'Amy Adams'.
-- It does this by using a subquery to find the birth year of 'Amy Adams' and then filtering the main query based on that year.
SELECT A.name,A.surname
FROM Actors_and_Actresses A
WHERE SUBSTRING(A.birth_date,7,10) IN (SELECT SUBSTRING(A.birth_date,7,10) FROM Actors_and_Actresses A WHERE CONCAT(A.name,' ',A.surname) = 'Amy Adams')
ORDER BY A.surname ASC;