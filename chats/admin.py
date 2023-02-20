from django.contrib import admin
from .models import Channel, Chat
from django.contrib.auth.models import User

# Register your models here.

admin.site.register(Channel)
admin.site.register(Chat)