from django.db import connection


#function to execute sql files
def run_sql_file(filepath):
    with open(filepath, 'r') as file:
        sql = file.read()
    
    with connection.cursor() as cursor:
        for statement in sql.split(';'):
            statement = statement.strip()
            if statement:
                cursor.execute(statement)

#run the file
run_sql_file('/Users/basar/Desktop/Dersler/6.dönem/CMPE 321/cmpe321-projects/Project-3/back-end/chess_app/db_scripts/database_operations.sql')