
from rest_framework import viewsets

from .serializers import PostSerializer, UserSerializer
from .models import Post
from django.contrib.auth.models import User

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer