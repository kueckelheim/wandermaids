from django.db import models


class Comment(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=False)
    message = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=250, unique=False)
    approved = models.BooleanField(default=False, blank=False)