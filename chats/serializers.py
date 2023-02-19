from rest_framework import serializers
from .models import Channel
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    # channels = serializers.PrimaryKeyRelatedField(many=True, queryset=Channel.objects.all())
    creator = serializers.ReadOnlyField(source = 'creator.username')

    class Meta:
        model = User
        fields = ['id', 'username', 'creator']

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
        instance.save()
        return instance



