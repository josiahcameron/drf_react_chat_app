from rest_framework import serializers
from .models import Channel
from django.contrib.auth.models import User
#Validation makes sure the required fields are set and have the allowed values; Unique validator checks to make sure the value given in the field is unique
from rest_framework.validators import UniqueValidator


class UserSerializer(serializers.ModelSerializer):
    #Username can be a maximum of 32 characters, is a required field, and the value must be unique among all User objects
    username = serializers.CharField(max_length=32, required=True, validators=[UniqueValidator(queryset=User.objects.all())])
    email = serializers.EmailField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])
    # Password must be at least 8 characters long; write_only is false by default, setting it to true makes sure the field can be used when updating/creating an instance, but not included when serializing
    password = serializers.CharField(min_length=8, write_only=True)
    
    channels = serializers.PrimaryKeyRelatedField(many=True, queryset=Channel.objects.all())
    creator = serializers.ReadOnlyField(source = 'creator.username')

    # Function for creating user
    def create(self, validated_data):
        # create_user is a method from the user class in Django;
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

        return user

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'creator']


class ChannelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Channel
        fields = ['id', 'name', 'creator']

    # Function for creating channels
    def create(self, validated_data):
        return Channel.objects.create(**validated_data)

    # Function for updating channels
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.creator = validated_data.get('creator', instance.creator)
        instance.admin = validated_data.get('admin', instance.admin)
        instance.save()
        return instance



