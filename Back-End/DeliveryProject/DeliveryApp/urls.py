from django.urls import path

from . import views

urlpatterns=[
    path("add_Delegate", views.add_Delegate, name="add_Delegate"),
    path("list_Delegate", views.list_Delegate, name="list_Delegate"),
    path("update_Delegate/<Delegate_id>", views.update_Delegate, name="update_Delegate"),
    path("delete_Delegate/<Delegate_id>", views.delete_Delegate, name="delete_Delegate"),
    path("add_Order", views.add_Order, name="add_Order"),
    path("list_Orders", views.list_Orders, name="list_Orders"),
    path("update_Order/<Order_id>", views.update_Order, name="update_Order"),
    path("delete_Order/<Order_id>", views.delete_Order, name="delete_Order"),
    path("add_AppRating", views.add_AppRating, name="add_AppRating"),
    path("delete_AppRating/<AppRating_id>", views.delete_AppRating, name="delete_AppRating"),
    path("add_DelegateRating", views.add_DelegateRating, name="add_DelegateRating"),
    path("delete_DelegateRating/<DelegateRating_id>", views.delete_DelegateRating, name="delete_DelegateRating"),
    path("Cancelling_Order", views.Cancelling_Order, name="Cancelling_Order"),
]

