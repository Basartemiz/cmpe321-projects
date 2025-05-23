from django.db import connection
from django.contrib.auth.hashers import make_password, check_password

def get_all_halls():
    with connection.cursor() as cursor:
        
        cursor.execute("""    
            SELECT hall_id, hall_name, country, capacity
            FROM Halls
            ORDER BY hall_id
        """)
        
        rows = cursor.fetchall()
        
        
        
        columns = [col[0] for col in cursor.description]
        halls = [ dict(zip(columns, row)) for row in rows ]
    return halls


def get_all_matches_coach(coach_username):
    with connection.cursor() as cursor:
        # 1. execute sql command
        cursor.execute(f"""
            SELECT match_id, match_date, time_slot, hall_id, table_id, team1_id, team2_id, arbiter_username, ratings
            FROM Matches
            where team1_id=(
            select team_id 
            from  Coaches 
            where username="{coach_username}"   )
            ORDER BY match_id
        """)
        # 2. fetch all rows
        rows = cursor.fetchall()
        

        # 3. convert to list of dicts
        columns = [col[0] for col in cursor.description]
        matches = [dict(zip(columns, row)) for row in rows]
    return matches
def get_all_matches_arbiter(arbiter_username):
    with connection.cursor() as cursor:
        # 1. execute sql command
        cursor.execute(f"""
            SELECT match_id, match_date, time_slot, hall_id, table_id, team1_id, team2_id, arbiter_username, ratings
            FROM Matches
            where arbiter_username="{arbiter_username}"
            ORDER BY match_id
        """)
        # 2. fetch all rows
        rows = cursor.fetchall()
        print(rows)
        print(arbiter_username)
        

        # 3. convert to list of dicts
        columns = [col[0] for col in cursor.description]
        matches = [dict(zip(columns, row)) for row in rows]
    return matches
#------player functions-------------
def get_players(player_name):
    with connection.cursor() as cursor:
        # 1. execute sql command
        cursor.execute(f"""
            SELECT p.name, p.surname, p.elo_rating
            FROM Players p 
            where p.username in (
                select m.white_player
                from  MatchAssignment m 
                where m.black_player="{player_name}")
                 or
            p.username in(
                select m.black_player
                from  MatchAssignment m
                where m.white_player="{player_name}")
            
            order by p.elo_rating desc
        """)
        # 2. fetch all rows
        rows = cursor.fetchall()
        
        

        # 3. convert to list of dicts
        columns = [col[0] for col in cursor.description]
        players = [dict(zip(columns, row)) for row in rows]
    return players


def get_players_tie(player_name):
    with connection.cursor() as cursor:
        # 1. execute sql command
        cursor.execute(f"""
            SELECT avg(p.elo_rating)
            FROM Players p 
            where p.username in (
                select m.white_player
                from  MatchAssignment m 
                where m.black_player="{player_name}" and  m.result="draw")
                or
            p.username in(
                select m1.black_player
                from  MatchAssignment m1
                where m1.white_player="{player_name}" and  m1.result="draw")
            
            
        """)
        # 2. fetch all rows
        rows = cursor.fetchall()
        
        
        
    return rows[0]


def get_players_most(player_name):
    with connection.cursor() as cursor:
        # 1. execute sql command
        cursor.execute(f"""
        SELECT p.name,p.elo_rating
            FROM Players p 
            where p.username in (
                select m.white_player
                from  MatchAssignment m 
                where m.black_player="{player_name}")
                or
            p.username in(
                select m1.black_player
                from  MatchAssignment m1
                where m1.white_player="{player_name}" )
            
            group by p.username
            having count(*) in 
        (
            select max(total_matches) from (
            SELECT count(*) as total_matches
            FROM Players p 
            where p.username in (
                select m.white_player
                from  MatchAssignment m 
                where m.black_player="{player_name}")
                or
            p.username in(
                select m1.black_player
                from  MatchAssignment m1
                where m1.white_player="{player_name}" )
            
            group by p.username
           ) as table_1
           )
        """)
        # 2. fetch all rows
        rows = cursor.fetchall()
        
        
        
        columns = [col[0] for col in cursor.description]
        player = [dict(zip(columns, row)) for row in rows]
    return player


#------player functions-------------


def get_teams():
    with connection.cursor() as cursor:
        # 1. execute sql command
        cursor.execute(f"""
            SELECT team_id, team_name
            FROM Teams
        """)
        #get rows
        rows = cursor.fetchall()
        
        

        #convert to dict
        columns = [col[0] for col in cursor.description]
        teams = [dict(zip(columns, row)) for row in rows]
    return teams

def addCoach(data):
    hashed = make_password(data["password"])
    try:
        with connection.cursor() as cursor:
                # 1. execute sql command
            cursor.execute(f"""
                    INSERT INTO Coaches 
                    (username, password, name, surname, nationality, team_id, contract_start, contract_finish)
                    VALUES ("{data["username"]}",
                    "{hashed}",
                    "{data["name"]}",
                    "{data["surname"]}",
                    "{data["nationality"]}",
                    "{data["team"]}",
                    "{data["contract_start"]}"
                    ,"{data["contract_finish"]}")
                """)

            return [{"status":"ok"}]
    except Exception as e:
        return [{"status":str(e)}]

#add Player method

def addPlayer(data):
    try:
        hashed = make_password(data["password"])
        with connection.cursor() as cursor:
                # 1. execute sql command
            cursor.execute(f"""
                    INSERT INTO Players
                    (username, password, name, surname, nationality,date_of_birth, fide_id, elo_rating,title_id)
                    VALUES ("{data["username"]}",
                    "{hashed}",
                    "{data["name"]}",
                    "{data["surname"]}",
                    "{data["nationality"]}",
                    "{data["date_of_birth"]}",
                    "{data["fide_id"]}",
                    "{data["elo_rating"]}", 
                    "{data["title_id"]}")
                """)

            return [{"status":"ok"}]
    except Exception as e:
        return [{"status":str(e)}]
    
def addArbiter(data):
    try:
        hashed = make_password(data["password"])
        with connection.cursor() as cursor:
                # 1. execute sql command
            cursor.execute(f"""
                    INSERT INTO Arbiters
                    (username, password, name, surname, nationality,experience_level)
                    VALUES ("{data["username"]}",
                    "{hashed}",
                    "{data["name"]}",
                    "{data["surname"]}",
                    "{data["nationality"]}",
                    "{data["experience_level"]}")
                """)

            return [{"status":"ok"}]
    except Exception as e:
        return [{"status":str(e)}]
    
def renameHall(hall_name,hall_id):
    try:
        with connection.cursor() as cursor:
                # 1. execute sql command
            cursor.execute(f"""
                    UPDATE Halls
                        SET hall_name = '{hall_name}'
                        WHERE hall_id = {hall_id};
                """)

            return [{"status":"ok"}]
    except Exception as e:
        return [{"status":str(e)}]


def createMatch(data):
    try:
        with connection.cursor() as cursor:
                # 1. execute sql command
            cursor.execute(f"""
                INSERT INTO Matches 
                (match_id, match_date, time_slot, hall_id, table_id, team1_id, team2_id, arbiter_username, ratings)
                VALUES (
                    {data["match_id"]},
                    '{data["match_date"]}',
                    {data["time_slot"]},
                    {data["hall_id"]},
                    {data["table_id"]},
                    {data["team1_id"]},
                    {data["team2_id"]},
                    '{data["arbiter_username"]}',
                    NULL
                    
                )
            """)
            return [{"status":"ok"}]
    except Exception as e:
        return [{"status":str(e)}]
    
def deleteMatch(match_id):
    try:
        with connection.cursor() as cursor:
                
            cursor.execute(f"DELETE FROM Matches WHERE match_id = {match_id}")

            return [{"status":"ok"}]
        
    except Exception as e:
        return [{"status":str(e)}]
    
def getArbiters():
    try:
        with connection.cursor() as cursor:
                
            cursor.execute("select username from Arbiters")

            #get rows
            rows = cursor.fetchall()
            
            

            #convert to dict
            columns = [col[0] for col in cursor.description]
            arbiters = [dict(zip(columns, row)) for row in rows]
            return arbiters
    except Exception as e:
        return [{"status":str(e)}]
    
def getCoachTeam(props):
    try:
        with connection.cursor() as cursor:
                
            cursor.execute(f"SELECT team_id FROM Coaches WHERE username = '{props['username']}'")

            #get rows
            rows = cursor.fetchall()
            
            

            #convert to dict
            columns = [col[0] for col in cursor.description]
            team_id = [dict(zip(columns, row)) for row in rows]
            return team_id
    except Exception as e:
        return [{"status":str(e)}]

def getType(username,password):
    with connection.cursor() as cursor:
        #get db manager
        with connection.cursor() as cursor:
            cursor.execute(
                """
                SELECT username, password
                FROM DBManagers
                WHERE username = %s AND password = %s
                """,
                [username, password]
            )
            rows = cursor.fetchall()
            if len(rows) != 0:
                return "manager"
    with connection.cursor() as cursor:
        #get db manager
        cursor.execute(
            f"""
        select username,password
        from Coaches
        where username="{username}" and password="{password}"
        """
        )
        rows = cursor.fetchall()
        if(len(rows)!=0):
            return "coach"
    with connection.cursor() as cursor:
        #get db manager
        cursor.execute(
            f"""
        select username,password
        from Arbiters
        where username="{username}" and password="{password}"
        """
        )
        rows = cursor.fetchall()
        if(len(rows)!=0):
            return "arbiter"
    with connection.cursor() as cursor:
        #get db manager
        cursor.execute(
            f"""
        select username,password
        from Players
        where username="{username}" and password="{password}"
        """
        )
        rows = cursor.fetchall()
        if(len(rows)!=0):
            return "player"
    with connection.cursor() as cursor:
        #get db manager
        with connection.cursor() as cursor:
            cursor.execute(
                """
                SELECT username, password
                FROM DBManagers
                WHERE username = %s AND password = %s
                """,
                [username, password]
            )
            rows = cursor.fetchall()
            if len(rows) != 0:
                return "manager"
            

    #now let's check for hashed passwords
    with connection.cursor() as cursor:
        hashed=make_password(password)
        print(hashed)
        #get db manager
        cursor.execute(
            f"""
        select username,password
        from Coaches
        where username="{username}" 
        """
        )
        rows = cursor.fetchall()
        if(len(rows)!=0):
            db_password = rows[0][1]
            if check_password(password, db_password): 
                return "coach"
    with connection.cursor() as cursor:
        hashed=make_password(password)
        #get db manager
        cursor.execute(
            f"""
        select username,password
        from Arbiters
        where username="{username}"
        """
        )
        rows = cursor.fetchall()
        if(len(rows)!=0):
            db_password = rows[0][1] 
            if check_password(password, db_password): 
                return "arbiter"
    with connection.cursor() as cursor:
        hashed=make_password(password)
        #get db manager
        cursor.execute(
            f"""
        select username,password
        from Players
        where username="{username}"
        """
        )
        rows = cursor.fetchall()
        if(len(rows)!=0):
            db_password = rows[0][1] 
            if check_password(password, db_password): 
                return "player"
        
    return "error"

