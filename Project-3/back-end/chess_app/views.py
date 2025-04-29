from django.shortcuts import render
from django.db import connection
from . import get_data
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
@api_view(['GET', 'POST'])
def halls(request):
    #we must return halls
    if request.method=="GET":
        halls=get_data.get_all_halls()
        return Response(halls)
    elif(request.method=="POST"):
        pass 
        #to do must rename halls 
    

def user(request):
    pass


#rate must be handled update
#get ==> returns matchlist json
#post ==> adds match
@api_view(['GET', 'POST'])
def match(request):
    #we must return matches
    if(request.method=="GET"):
        matches=get_data.get_all_matches()
        return Response(matches)

#get ==> will return player list , listed desc by elo rating
def player(request):
    pass

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



