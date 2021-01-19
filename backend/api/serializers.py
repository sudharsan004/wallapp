from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Post

class PostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ('id','title','description','user_id')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username']