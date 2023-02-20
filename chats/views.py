from rest_framework import generics
from rest_framework import status
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from .models import Channel, Chat
from .serializers import ChannelSerializer, UserSerializer
from django.contrib.auth.models import User
from .permissions import IsCreatorOrReadOnly
from frontend.static.src.Components import RegistrationForm 



class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ChannelListAPIView(generics.ListCreateAPIView):
    #What records am I getting?
    queryset = Channel.objects.all()
    #What should it look like? How to bring records back.
    serializer_class = ChannelSerializer
    # If the user isn't authenticated, the view will be read-only
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        # Create method will now also be passed a creator field based on the user
        serializer.save(creator=self.request.user)

class ChannelDetail(generics.RetrieveUpdateDestroyAPIView):
    #What records am I getting?
    queryset = Channel.objects.all()
    #What should it look like? How to bring records back.
    serializer_class = ChannelSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsCreatorOrReadOnly]


# Defining an APIView for creating a user
class CreateUser(APIView):
    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                token = Token.objects.create(user=user)
                json = serializer.data
                json['token'] = token.key
                return Response(json, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

