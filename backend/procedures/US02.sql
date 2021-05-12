ALTER PROCEDURE "DBA"."US02"(in codePostal INTEGER , in nomville VARCHAR (60)) 
    BEGIN 
        --
        INSERT INTO ville(codeP,ville)
            VALUES(codePostal,nomville)
        --
    END
