# Generated by Django 4.0.4 on 2022-07-26 08:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DeliveryApp', '0003_remove_newdelegate_carimage_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='delegaterating',
            name='Description',
            field=models.TextField(default=123),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='newdelegate',
            name='CarImage',
            field=models.URLField(default=123),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='newdelegate',
            name='DrivingLicense',
            field=models.URLField(blank=True),
        ),
        migrations.AddField(
            model_name='newdelegate',
            name='PersonalImage',
            field=models.URLField(blank=True),
        ),
        migrations.AlterField(
            model_name='newdelegate',
            name='CarInfo',
            field=models.TextField(blank=True, max_length=200),
        ),
        migrations.AlterField(
            model_name='newdelegate',
            name='IdNumber',
            field=models.IntegerField(blank=True),
        ),
        migrations.AlterField(
            model_name='newdelegate',
            name='PhoneNumber',
            field=models.IntegerField(blank=True),
        ),
    ]