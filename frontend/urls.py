from django.urls import path, include
from .views import index

urlpatterns = [
    path('', index),
    path('read', index),
    path('write', index),
    path('read/blog', index)
]