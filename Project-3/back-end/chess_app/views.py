from django.shortcuts import render
from django.db import connection
from . import get_data
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
@api_view(['GET', 'POST','PUT'])
def halls(request):
    #we must return halls
    if request.method=="GET":
        halls=get_data.get_all_halls()
        return Response(halls)
    elif(request.method=="PUT"):
        data=get_data.renameHall(request.data["hall_name"],request.data["hall_id"])
        return Response(data[0])
        #to do must rename halls 
    

def user(request):
    pass


#rate must be handled update
#get ==> returns matchlist json
#post ==> adds match
@api_view(['GET', 'POST'])
def match(request,coach_username):
    #we must return matches
    if(request.method=="GET"):
        matches=get_data.get_all_matches_coach(coach_username)
        return Response(matches)
    
@api_view(['GET', 'POST'])
def arbiter_match(request,arbiter_username):
    #we must return matches
    if(request.method=="GET"):
        matches=get_data.get_all_matches_arbiter(arbiter_username)
        return Response(matches)

#get ==> will return player list , listed desc by elo rating
@api_view(['GET', 'POST'])
def player(request,player_username):
    if(request.method=="GET"):
        players=get_data.get_players(player_username)
        return Response(players)
    
@api_view(['GET', 'POST'])
def teams(request):
    if(request.method=="GET"):
        teams=get_data.get_teams()
        return Response(teams)

@api_view(['GET', 'POST'])
def login(request):
    #lets get the type
    if(request.method=="POST"):
        #get data
        username = request.data.get('username')
        password = request.data.get('password')
        print(username)
        type=get_data.getType(username,password)
        type_dict={"type":type}
        return Response(type_dict)
    return Response()

@api_view(['GET', 'POST'])
def addCoach(request):
    #lets get the type
    if(request.method=="POST"):
        #get data
        status=get_data.addCoach(request.data)
        print(request.data)
        return Response(status[0])
    return Response()

@api_view(['GET', 'POST'])
def addPlayer(request):
    #lets get the type
    if(request.method=="POST"):
        #get data
        status=get_data.addPlayer(request.data)
        print(request.data)
        return Response(status[0])
    return Response()


@api_view(['GET', 'POST'])
def addArbiter(request):
    #lets get the type
    if(request.method=="POST"):
        #get data
        status=get_data.addArbiter(request.data)
        print(request.data)
        return Response(status[0])
    return Response()


@api_view(['GET', 'POST'])
def createMatch(request):
    #lets get the type
    if(request.method=="POST"):
        #get data
        status=get_data.createMatch(request.data)
        print(request.data)
        return Response(status[0])
    return Response()

@api_view(['GET', 'POST'])
def deleteMatch(request):
    #lets get the type
    if(request.method=="POST"):
        #get data
        status=get_data.deleteMatch(request.data["match_id"])
        print(request.data)
        return Response(status[0])
    return Response()

@api_view(['GET'])
def getArbiters(request):
    #lets get the type
    if(request.method=="GET"):
        #get data
        status=get_data.getArbiters()
        print(request.data)
        return Response(status)
    return Response()


@api_view(['GET', 'POST'])
def getTeam(request):
    #lets get the type
    if(request.method=="POST"):
        #get data
        status=get_data.getCoachTeam(request.data)
        print(request.data)
        return Response(status)
    return Response()


