from django.urls import path
from .views import  MessageAPIView

urlpatterns =[
    path('mesaages',MessageAPIView.as_view())

]