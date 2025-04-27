from rest_framework import serializers
from Blog_App.models import Blog


# Serializers define the API representation.
class BlogSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'title', 'description', 'date', 'name']

class WriteBlogSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Blog
        fields = ['title', 'description', 'name']
