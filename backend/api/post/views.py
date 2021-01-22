
from rest_framework import viewsets

from .serializers import PostSerializer, UserSerializer
from .models import Post
from django.contrib.auth.models import User
from django.http import JsonResponse


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

def deletePost(request,pk):
    post = Post.objects.get(id=pk)
    post.delete()
    return JsonResponse({'post_deleted_id':pk})
