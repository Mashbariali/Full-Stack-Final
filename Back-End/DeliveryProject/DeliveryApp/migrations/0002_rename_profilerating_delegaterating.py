# Generated by Django 4.0.4 on 2022-07-24 10:39

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('DeliveryApp', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='ProfileRating',
            new_name='DelegateRating',
        ),
    ]
