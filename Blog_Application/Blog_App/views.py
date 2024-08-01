from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import BlogSerializer, WriteBlogSerializer
from django.views.decorators.csrf import csrf_exempt
from .models import Blog




class BlogView(generics.ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class WriteView(APIView):
    serializer_class = WriteBlogSerializer
    

    def post(self, request, format=None):
        
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            title = serializer.data.get('title')
            description = serializer.data.get('description')
            name = serializer.data.get('name')
            queryset = Blog.objects.all()
            blog = Blog(title=title, description=description, name=name)
            blog.save()
        return Response(BlogSerializer(blog).data, status=status.HTTP_201_CREATED)

class ReadView(APIView):   
    def get(self, request, pk):
        try:
            blog =  Blog.objects.get(pk=pk)
        except Blog.DoesNotExist:
            return HttpResponse(status=404)
        if request.method == 'GET':
            return Response(BlogSerializer(blog).data)




