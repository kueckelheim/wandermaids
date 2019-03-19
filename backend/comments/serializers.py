from rest_framework import serializers
from comments.models import Comment 

# Serializers
class CommentPostSerializer(serializers.ModelSerializer):
  class Meta:
    model = Comment
    fields = ('title', 'name', 'email', 'message', 'created_at')

class CommentGetSerializer(serializers.ModelSerializer):
  class Meta:
    model = Comment
    fields = ('title', 'name', 'message', 'created_at')