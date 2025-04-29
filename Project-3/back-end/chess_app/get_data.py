from django.db import connection


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


def get_all_matches():
    with connection.cursor() as cursor:
        # 1. execute sql command
        cursor.execute("""
            SELECT match_id, match_date, time_slot, hall_id, table_id, team1_id, team2_id, arbiter_username, ratings
            FROM Matches
            ORDER BY match_id
        """)
        # 2. fetch all rows
        rows = cursor.fetchall()
        

        # 3. convert to list of dicts
        columns = [col[0] for col in cursor.description]
        matches = [dict(zip(columns, row)) for row in rows]
    return matches

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
        
    return "error"

