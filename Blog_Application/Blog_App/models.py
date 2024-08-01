from django.db import models
from uuid import uuid4

# Create your models here.
# class User(models.Model):
#     id = models.AutoField(primary_key=True)
#     name = models.CharField(max_length = 80, null=False)
#     email = models.EmailField(unique=True, null=False, default="No email")
#     password = models.CharField(max_length=50, null=False)


class Blog(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length = 150, null=False)
    description = models.TextField(editable=True, null=False, blank=False, default="No content")
    date = models.DateField(auto_now=True)
    name = models.CharField(max_length = 150, default="Anonymous")