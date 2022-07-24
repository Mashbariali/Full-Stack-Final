from rest_framework.response import Response
from rest_framework.views import APIView
from .pusher import  pusher_client


class MessageAPIview(APIView):
    def post(self, request):
        pusher_client.trigger('my-channel','message',{
            'username': request.data['username'],
            'message': request.data['message'],
        })

        return Response([])


