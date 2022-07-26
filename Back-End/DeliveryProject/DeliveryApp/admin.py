from .models import NewDelegate,Order,AppRating,CancellingOrder
from django.contrib import admin

class NewDelegateAdmin(admin.ModelAdmin):
    list_display = ("name","PhoneNumber","IdNumber","PersonalImage","CarInfo","CarImage","DrivingLicense","user")
admin.site.register(NewDelegate, NewDelegateAdmin)


class OrderAdmin(admin.ModelAdmin):
    list_display = ("PackageType","FromWhichCity","ToWhichCity","DeliveryTime","Description","user")
admin.site.register(Order, OrderAdmin)



class AppRatingAdmin(admin.ModelAdmin):
    list_display = ("rate","user")
admin.site.register(AppRating, AppRatingAdmin)



class CancellingOrderAdmin(admin.ModelAdmin):
    list_display = ("Cancel","Description","user")
admin.site.register(CancellingOrder, CancellingOrderAdmin)




