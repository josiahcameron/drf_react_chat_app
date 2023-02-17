from django.urls import path

from .views import ChannelListAPIView

urlpatterns = [
    path("", ChannelListAPIView.as_view())
]