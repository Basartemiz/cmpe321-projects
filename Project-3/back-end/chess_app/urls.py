from django.urls import path 
from . import views 

urlpatterns = [ 
    path("match",views.match),
    path("user",views.user),  
    path("halls",views.halls),
    path("player",views.player), 
    path("login",views.login)
] 