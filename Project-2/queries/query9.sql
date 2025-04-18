USE MovieDB;

-- 9
SELECT A.name,A.surname
FROM Actors_and_Actresses A
WHERE SUBSTRING(A.birth_date,7,10) IN (SELECT SUBSTRING(A.birth_date,7,10) FROM Actors_and_Actresses A WHERE CONCAT(A.name,' ',A.surname) = 'Amy Adams')
ORDER BY A.surname ASC;