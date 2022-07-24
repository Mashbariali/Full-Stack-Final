from django.urls import path
from . import views

app_name = "User"

urlpatterns = [
    path("register", views.register_user, name="register_user"),
    path("login", views.login_user, name="login_user"),
    path('logout',views.user_logout,name='logout'),

    ]