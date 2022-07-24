from django.db import models
from django.contrib.auth.models import User



class NewDelegate(models.Model):
    name = models.CharField(max_length=256)
    PhoneNumber=models.IntegerField(max_length=10)
    IdNumber=models.IntegerField(max_length=10)
    PersonalImage = models.URLField()
    CarInfo = models.TextField(max_length=200)
    CarImage = models.URLField()
    #علي شاك فيها
    DrivingLicense = models.URLField()
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


class ProfileRating(models.Model):
    RATE_CHOICES = (
        ("4", "excellent"),
        ("3 ", "very good"),
        ("2", "good"),
        ("1", "bad"),
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rate = models.CharField(max_length=250, choices=RATE_CHOICES)
    profile = models.ForeignKey(NewDelegate, on_delete=models.CASCADE)


    # الفاتورة*************


















