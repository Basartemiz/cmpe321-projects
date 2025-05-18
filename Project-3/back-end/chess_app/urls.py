from django.urls import path 
from . import views 

urlpatterns = [ 

    path("match/<str:coach_username>/", views.match, name="match-detail"),

    path("arbiter/<str:arbiter_username>/", views.arbiter_match, name="arbiter"),

    #----player endpoints---------
    path("player/<str:player_username>/", views.player, name="player_get"),

    path("player/<str:player_username>/tie", views.player_tie, name="player_tie"),

    path("player/<str:player_username>/most", views.player_most, name="player_most"),
     #----player endpoints---------

    path("addCoach/", views.addCoach, name="addCoach"),

    path("addPlayer/", views.addPlayer, name="addPlayer"),

    path("addArbiter/", views.addArbiter, name="addArbiter"),

    path("createMatch/", views.createMatch, name="createMatch"),

    path("deleteMatch/", views.deleteMatch, name="deleteMatch"),

    path("getArbiter/", views.getArbiters, name="getArbiter"),

    path("getCoachTeam/", views.getTeam, name="getTeam"),

    path("teams/",views.teams), 

    path("user/",views.user),  

    path("halls/",views.halls),

   

    path("login/",views.login),
] 
