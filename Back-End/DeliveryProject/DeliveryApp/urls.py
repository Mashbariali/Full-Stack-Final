from django.urls import path

from . import views

urlpatterns=[
    path("add_NewDelegate", views.add_NewDelegate, name="add_NewDelegate"),
]

