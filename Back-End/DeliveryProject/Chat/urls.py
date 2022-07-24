from django.urls import path
from .views import  MessageAPIview

urlpatterns =[
    path('mesaage',MessageAPIview.as_view())

]