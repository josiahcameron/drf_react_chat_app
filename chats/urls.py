from django.urls import path

from . import views

urlpatterns = [
    path("channels/", views.ChannelListAPIView.as_view()),
    path("channels/<int:pk>/", views.ChannelDetail.as_view()),
    path("users/", views.UserList.as_view()),
    path("users/<int:pk>/", views.UserDetail.as_view()),
]