from dataclasses import field
from rest_framework import serializers
from .models import NewDelegate,Order,AppRating,DelegateRating,CancellingOrder


"""
Serializers allow complex data such as querysets and model instances 
to be converted to native Python datatypes that can then be easily 
rendered into JSON

"""

class NewDelegateSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewDelegate
        fields = '__all__'




class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

class AppRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppRating
        fields = '__all__'


class DelegateRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = DelegateRating
        fields = '__all__'

        

class CancellingOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = CancellingOrder
        fields = '__all__'        