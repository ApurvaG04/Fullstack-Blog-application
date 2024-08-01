from django.urls import path, include
from .views import BlogView, WriteView, ReadView

urlpatterns = [
    path('read/', BlogView.as_view()),
    path('write/', WriteView.as_view()),
    path('read/<int:pk>/', ReadView.as_view())
]