USE MovieDB;

-- 7
-- This query retrieves all actors and actresses whose surname starts with the letter 'P' from the Actors_and_Actresses table.
-- It does this by using the SUBSTRING function to check the first character of the surname.
SELECT A.actor_id,A.name,A.surname,A.birth_date
FROM Actors_and_Actresses A
WHERE SUBSTRING(A.surname, 1, 1) = 'P';