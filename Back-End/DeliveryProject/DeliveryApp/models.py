from django.db import models
from django.contrib.auth.models import User



class NewDelegate(models.Model):
    name = models.CharField(max_length=256)
    PhoneNumber=models.IntegerField(blank=True,null=True)
    IdNumber=models.IntegerField(blank=True)
    PersonalImage = models.URLField(blank=True)
    CarInfo = models.TextField(max_length=200,blank=True)
    CarImage = models.URLField(blank=True)
    #علي شاك فيها
    DrivingLicense = models.URLField(blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Order(models.Model):
    CHOICES1 = (
        ('طرد صغير', 'طرد صغير'),
        ('طرد متوسط', 'طرد متوسط'),
        ('طرد كبير', 'طرد كبير'),
    )
    CHOICES2 = (
        ('الرياض', 'الرياض'),
        ('مكة', 'مكة'),
        ('الدمام', 'الدمام'),
        ('جدة', 'جدة'),
        ('المدينة', 'المدينة'),
        ('أبها', 'أبها'),
        ('القصيم', 'القصيم'),
        ('الاحساء', 'الاحساء'),
        ('أبها', 'أبها'),
        ('جازان', 'جازان'),
        ('تبوك', 'تبوك'),
        ('نجران', 'نجران'),
        ('حائل', 'حائل'),
        ('الحدود الشماليه', 'الحدود الشماليه')

    )
    CHOICES3 = (
        ('0-5h',' 0-5h'),
        ('6-12h', '6-12h'),
        ('+12h', '+12h'),
    )


    PackageType = models.CharField(max_length=50,choices=CHOICES1)
    FromWhichCity = models.CharField(max_length=50,choices=CHOICES2)
    ToWhichCity = models.CharField(max_length=50,choices=CHOICES2)
    DeliveryTime = models.CharField(max_length=50,choices=CHOICES3)
    Description = models.TextField()
    date= models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


# class Bill(models.Model):
#     FromWhichCity = models.CharField(choices=CHOICES2)


class AppRating(models.Model):
    RATE_CHOICES = (
        ("4", "excellent"),
        ("3 ", "very good"),
        ("2", "good"),
        ("1", "bad"),
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rate = models.CharField(max_length=250, choices=RATE_CHOICES)


class DelegateRating(models.Model):
    RATE_CHOICES = (
        ("4", "excellent"),
        ("3 ", "very good"),
        ("2", "good"),
        ("1", "bad"),
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rate = models.CharField(max_length=250, choices=RATE_CHOICES,blank=True)
    Description = models.TextField(blank=True)
    # profile = models.ForeignKey(NewDelegate, on_delete=models.CASCADE)

class CancellingOrder(models.Model):
    Cancel_CHOICES = (
        ("السعر غير مناسب", "السعر غير مناسب"),
        ("المندوب غير مناسب", "المندوب غير مناسب"),
        ("غير ذلك", "غير ذلك"),
        
    )
    Cancel = models.CharField(max_length=250, choices=Cancel_CHOICES)
    Description = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)




    # الفاتورة*************


















