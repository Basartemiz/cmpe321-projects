from django.urls import path 
from . import views 

urlpatterns = [ 

    path("match/<str:coach_username>/", views.match, name="match-detail"),

    path("arbiter/<str:arbiter_username>/", views.arbiter_match, name="arbiter"),

    path("player/<str:player_username>/", views.player, name="player"),

    path("addCoach/", views.addCoach, name="addCoach"),

    path("addPlayer/", views.addPlayer, name="addPlayer"),

    path("addArbiter/", views.addArbiter, name="addArbiter"),

    path("createMatch/", views.createMatch, name="createMatch"),

    path("deleteMatch/", views.deleteMatch, name="deleteMatch"),

    path("teams/",views.teams), 

    path("user/",views.user),  

    path("halls/",views.halls),

   

    path("login/",views.login),
] 
