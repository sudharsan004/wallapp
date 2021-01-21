from django.urls import path,include
from .views import PostViewSet, UserViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'', PostViewSet,basename='Post')
router.register(r'users', UserViewSet,basename='Users')

urlpatterns = [
    path('',include(router.urls))
]
