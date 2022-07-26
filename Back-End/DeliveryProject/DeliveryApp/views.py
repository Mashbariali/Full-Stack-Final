from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response
from .models import NewDelegate,Order,AppRating,DelegateRating,CancellingOrder
from rest_framework.permissions import IsAdminUser

from .serializers import NewDelegateSerializer,OrderSerializer,AppRatingSerializer,DelegateRatingSerializer,CancellingOrderSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication


# ADD, View, Update, and Delete new Delegate.
@api_view(['POST'])
@authentication_classes([JWTAuthentication])
#@permission_classes([IsAuthenticated])
def add_Delegate(request: Request):
    if not request.user.is_authenticated: #or not request.user.has_perm('SecurityApp.add_scan_vul'):
        return Response({"msg": "Sorry, Not Allowed to add New Delegate ..."}, status=status.HTTP_401_UNAUTHORIZED)
    request.data.update(user=request.user.id)
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
def list_Delegate(request: Request):
    if not request.user.is_authenticated or not request.user.has_perm('DeliveryApp.list_NewDelegate'):
        return Response({"msg": "Not Allowed"}, status=status.HTTP_401_UNAUTHORIZED)
    request.data.update(user=request.user.id)

    newDelegate = NewDelegate.objects.all()
    dataResponse = {
        "msg": "New Delegate in the world",
        "Delegate": NewDelegateSerializer(instance=newDelegate, many=True).data
    }
    return Response(dataResponse)


@api_view(['PUT'])
@authentication_classes([JWTAuthentication])
#@permission_classes([IsAuthenticated])
def update_Delegate(request: Request, Delegate_id):
    if not request.user.is_authenticated: #or not request.user.has_perm('SecurityApp.change_scan_vul'):
        return Response({"msg": "Not Allowed please LOGIN..."}, status=status.HTTP_401_UNAUTHORIZED)
    newDelegate = NewDelegate.objects.get(id=Delegate_id)
    updated_delegate = NewDelegateSerializer(instance=newDelegate, data=request.data)
    if request.user.id == newDelegate.user.id:
        if updated_delegate.is_valid():
            updated_delegate.save()
            responseData = {
            "msg": "updated Delegate successefully"
        }

            return Response(responseData)
        else:
            print(updated_delegate.errors)
            return Response({"msg": "bad request, cannot update"}, status=status.HTTP_400_BAD_REQUEST)
    else:
         return Response({"msg": "bad request, cannot update"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["DELETE"])
@authentication_classes([JWTAuthentication])
#@permission_classes([IsAuthenticated])
def delete_Delegate(request: Request, Delegate_id):
    if not request.user.is_authenticated: #or not request.user.has_perm('SecurityApp.delete_scan_vul'):
        return Response({"msg": "Not Allowed please LOGIN..."}, status=status.HTTP_401_UNAUTHORIZED)

    newDelegate = NewDelegate.objects.get(id=Delegate_id)
    if request.user.id == newDelegate.user.id:
     newDelegate.delete()
     return Response({"msg": "DELETE Delegate Successfully"})
    else:

     return Response({"msg": "bad request, cannot delete other Delegate "}, status=status.HTTP_401_UNAUTHORIZED)


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

# ADD, View, Update, and Delete new Order.
@api_view(['POST'])
@authentication_classes([JWTAuthentication])
#@permission_classes([IsAuthenticated])
def add_Order(request: Request):
    if not request.user.is_authenticated: #or not request.user.has_perm('SecurityApp.add_scan_vul'):
        return Response({"msg": "Sorry, Not Allowed to add New Order ..."}, status=status.HTTP_401_UNAUTHORIZED)
    request.data.update(user=request.user.id)
    order = OrderSerializer(data=request.data)
    if order.is_valid():
        order.save()
        dataResponse = {
            "msg": "Thank you for record this form...",
            "Order": order.data
        }
        return Response(dataResponse)
    else:
        print(order.errors)
        dataResponse = {"msg": "Sorry, couldn't add new Order..."}
        return Response(dataResponse, status=status.HTTP_400_BAD_REQUEST)

#Only the Delegate can list the orders.
@api_view(['GET'])
@authentication_classes([JWTAuthentication])
# @permission_classes([IsAuthenticated])
def list_Orders(request: Request):
    if not request.user.is_authenticated: #or not request.user.has_perm('DeliveryApp.view_order'):
        return Response({"msg": "Not Allowed"}, status=status.HTTP_401_UNAUTHORIZED)
    request.data.update(user=request.user.id)

    order = Order.objects.all()
    dataResponse = {
        "msg": "New Order Add",
        "Order": OrderSerializer(instance=order, many=True).data
    }
    return Response(dataResponse)


@api_view(['PUT'])
@authentication_classes([JWTAuthentication])
#@permission_classes([IsAuthenticated])
def update_Order(request: Request, Order_id):
    if not request.user.is_authenticated:#or not request.user.has_perm('SecurityApp.change_scan_vul'):
        return Response({"msg": "Not Allowed please LOGIN..."}, status=status.HTTP_401_UNAUTHORIZED)
    order = Order.objects.get(id=Order_id)

    update_order = OrderSerializer(instance=order, data=request.data)
    if request.user.id == order.user.id:
        if update_order.is_valid():
            update_order.save()
            responseData = {
            "msg": "updated Order successefully"
        }

            return Response(responseData) 
        else:
            print(update_order.errors)
            return Response({"msg": "bad request, cannot update"}, status=status.HTTP_400_BAD_REQUEST)
    else:
         return Response({"msg": "bad request, cannot update"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["DELETE"])
@authentication_classes([JWTAuthentication])
#@permission_classes([IsAuthenticated])
def delete_Order(request: Request, Order_id):
    if not request.user.is_authenticated: #or not request.user.has_perm('SecurityApp.delete_scan_vul'):
        return Response({"msg": "Not Allowed please LOGIN..."}, status=status.HTTP_401_UNAUTHORIZED)

    order = Order.objects.get(id=Order_id)
    if request.user.id == order.user.id:
        order.delete()
        return Response({"msg": "Delete Order Successfully"})
    else:

     return Response({"msg": "bad request, cannot delete other order "}, status=status.HTTP_401_UNAUTHORIZED)
    



# ADD and Delete new AppRating.
@api_view(['POST'])
@authentication_classes([JWTAuthentication])
#@permission_classes([IsAuthenticated])
def add_AppRating(request: Request):
    if not request.user.is_authenticated: #or not request.user.has_perm('SecurityApp.add_scan_vul'):
        return Response({"msg": "Sorry, Not Allowed to add New Rating ..."}, status=status.HTTP_401_UNAUTHORIZED)

    appRating = AppRatingSerializer(data=request.data)
    if appRating.is_valid():
        appRating.save()
        dataResponse = {
            "msg": "Thank you for record this form...",
            "Rating": appRating.data
        }
        return Response(dataResponse)
    else:
        print(appRating.errors)
        dataResponse = {"msg": "Sorry, couldn't add new Rating..."}
        return Response(dataResponse, status=status.HTTP_400_BAD_REQUEST)

def delete_AppRating(request: Request, AppRating_id):
    if not request.user.is_authenticated: #or not request.user.has_perm('SecurityApp.delete_scan_vul'):
        return Response({"msg": "Not Allowed please LOGIN..."}, status=status.HTTP_401_UNAUTHORIZED)

    appRating = AppRating.objects.get(id=AppRating_id)
    if request.user.id == appRating.user.id:
        appRating.delete()
        return Response({"msg": "Delete Rating Successfully"})
    else:

     return Response({"msg": "bad request, cannot delete other Rating "}, status=status.HTTP_401_UNAUTHORIZED)
    


# ADD and Delete new DelegateRating.
@api_view(['POST'])
@authentication_classes([JWTAuthentication])
#@permission_classes([IsAuthenticated])
def add_DelegateRating(request: Request):
    if not request.user.is_authenticated: #or not request.user.has_perm('SecurityApp.add_scan_vul'):
        return Response({"msg": "Sorry, Not Allowed to add New Rating ..."}, status=status.HTTP_401_UNAUTHORIZED)
    request.data.update(user=request.user.id)

    delegateRating = DelegateRatingSerializer(data=request.data)
    if delegateRating.is_valid():
        delegateRating.save()
        dataResponse = {
            "msg": "Thank you for record this form...",
            "Rating": delegateRating.data
        }
        return Response(dataResponse)
    else:
        print(delegateRating.errors)
        dataResponse = {"msg": "Sorry, couldn't add new Rating..."}
        return Response(dataResponse, status=status.HTTP_400_BAD_REQUEST)

def delete_DelegateRating(request: Request, DelegateRating_id):
    if not request.user.is_authenticated: #or not request.user.has_perm('SecurityApp.delete_scan_vul'):
        return Response({"msg": "Not Allowed please LOGIN..."}, status=status.HTTP_401_UNAUTHORIZED)

    delegateRating = DelegateRating.objects.get(id=DelegateRating_id)
    if request.user.id == delegateRating.user.id:
            delegateRating.delete()
            return Response({"msg": "Delete Rating Successfully"})
    else:


     return Response({"msg": "bad request, cannot delete other Rating "}, status=status.HTTP_401_UNAUTHORIZED)
    
# .
@api_view(['POST'])
@authentication_classes([JWTAuthentication])
#@permission_classes([IsAuthenticated])
def Cancelling_Order(request: Request):
    if not request.user.is_authenticated: #or not request.user.has_perm('SecurityApp.add_scan_vul'):
        return Response({"msg": "Sorry, Not Allowed to Cancelling Order ..."}, status=status.HTTP_401_UNAUTHORIZED)

    cancelling = CancellingOrderSerializer(data=request.data)
    if cancelling.is_valid():
        cancelling.save()
        dataResponse = {
            "msg": "Thank you for record this form...",
            "cancelling Order": cancelling.data
        }
        return Response(dataResponse)
    else:
        print(NewDelegate.errors)
        dataResponse = {"msg": "Sorry, couldn't Cancelling The Order..."}
        return Response(dataResponse, status=status.HTTP_400_BAD_REQUEST)



