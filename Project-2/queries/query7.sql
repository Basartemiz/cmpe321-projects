USE MovieDB;

-- 7
SELECT A.actor_id,A.name,A.surname,A.birth_date
FROM Actors_and_Actresses A
WHERE SUBSTRING(A.surname, 1, 1) = 'P';