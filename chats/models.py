from django.db import models

# class User(models.Model):
#     first_name = models.CharField(max_length=255)
#     last_name = models.CharField( max_length=255)
#     username = models.CharField(max_length=255)
#     email = models.URLField()

#     def __str__(self):
#         return self.username
    

class Channel(models.Model):
    name = models.CharField(max_length=255)
    # Will eventually need Foreign Keys
    creator = models.CharField(max_length=255)
    

    def __str__(self):
        return self.name

class Chat(models.Model):
    author = models.CharField(max_length=255)
    text = models.TextField()
    
