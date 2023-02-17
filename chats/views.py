from rest_framework import generics

from .models import User, Channel, Chat
from .serializers import ChannelSerializer

class ChannelListAPIView(generics.ListAPIView):
    #What records am I getting?
    queryset = Channel.objects.all()
    #What should it look like? How to bring records back.
    serializer_class = ChannelSerializer
