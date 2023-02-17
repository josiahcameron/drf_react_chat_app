from django.contrib import admin
from .models import User, Channel, Chat

# Register your models here.
admin.site.register(User)
admin.site.register(Channel)
admin.site.register(Chat)