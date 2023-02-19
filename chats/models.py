from django.db import models
from django.contrib.auth.models import User


#If creating your own User class, put AUTH_USER_MODEL = 'users.CustomUSer' in your settings and then refer to it elsewhere
#Then just register the model referencing the custom user to your admin.py
# class User(models.Model):
#     first_name = models.CharField(max_length=255)
#     last_name = models.CharField( max_length=255)
#     username = models.CharField(max_length=255)
#     email = models.URLField()

#     def __str__(self):
#         return self.username
    

class Channel(models.Model):
    name = models.CharField(max_length=255)
    # Refers directly to the USER model 
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    

    def __str__(self):
        return self.name

class Chat(models.Model):
    author = models.CharField(max_length=255)
    text = models.TextField()
    # channel = models.ForeignKey(Channel, related_name="chats", on_delete=models.CASCADE)
    
