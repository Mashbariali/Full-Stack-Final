from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response
from .models import NewDelegate,Order,AppRating,ProfileRating
from rest_framework.permissions import IsAdminUser

from .serializers import NewDelegateSerializer,OrderSerializer,AppRatingSerializer,ProfileRatingSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication


# ADD, View, Update, and Delete new Vulnerabilities by the Scanner.
@api_view(['POST'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def add_NewDelegate(request: Request):
    if not request.user.is_authenticated or not request.user.has_perm('SecurityApp.add_scan_vul'):
        return Response({"msg": "Sorry, Not Allowed to add vulnerabilities ..."}, status=status.HTTP_401_UNAUTHORIZED)

    NewDelegate = NewDelegateSerializer(data=request.data)
    if NewDelegate.is_valid():
        NewDelegate.save()
        dataResponse = {
            "msg": "Thank you for record this form...",
            "Delegate": NewDelegate.data
        }
        return Response(dataResponse)
    else:
        print(NewDelegate.errors)
        dataResponse = {"msg": "Sorry, couldn't add new Delegate..."}
        return Response(dataResponse, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAdminUser])
def list_NewDelegate(request: Request):
    if not request.user.is_authenticated or not request.user.has_perm('DeliveryApp.list_NewDelegate'):
        return Response({"msg": "Not Allowed"}, status=status.HTTP_401_UNAUTHORIZED)
    request.data.update(user=request.user.id)

    newDelegate = NewDelegate.objects.all()
    dataResponse = {
        "msg": "New vulnerabilities in the world",
        "Vulnerabilities": NewDelegateSerializer(instance=newDelegate, many=True).data
    }
    return Response(dataResponse)


@api_view(['PUT'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def update_NewDelegate(request: Request, Delegate_id):
    if not request.user.is_authenticated or not request.user.has_perm('SecurityApp.change_scan_vul'):
        return Response({"msg": "Not Allowed please LOGIN..."}, status=status.HTTP_401_UNAUTHORIZED)
    newDelegate = NewDelegate.objects.get(id=Delegate_id)

    updated_delegate = NewDelegateSerializer(instance=newDelegate, data=request.data)
    if updated_delegate.is_valid():
        updated_delegate.save()
        responseData = {
            "msg": "updated Delegate successefully"
        }

        return Response(responseData)
    else:
        print(updated_delegate.errors)
        return Response({"msg": "bad request, cannot update"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["DELETE"])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def delete_NewDelegate(request: Request, Delegate_id):
    if not request.user.is_authenticated or not request.user.has_perm('SecurityApp.delete_scan_vul'):
        return Response({"msg": "Not Allowed please LOGIN..."}, status=status.HTTP_401_UNAUTHORIZED)

    newDelegate = NewDelegate.objects.get(id=Delegate_id)
    newDelegate.delete()
    return Response({"msg": "DELETE Delegate Successfully"})


# @api_view(['GET'])
# @authentication_classes([JWTAuthentication])
# def search_vulnerabilityOS(request: Request, vul_id):
#     if not request.user.is_authenticated:
#         return Response({"msg": "Not Allowed please LOGIN..."}, status=status.HTTP_401_UNAUTHORIZED)
#
#     scan_Vul = Scan_Vul.objects.filter(type_OS=vul_id)
#
#     dataResponse = {
#         "msg": "the vulnerability :",
#         "scan_Vulnerability": Scan_VulSerializer(instance=scan_Vul, many=True).data
#     }
#
#     return Response(dataResponse)
