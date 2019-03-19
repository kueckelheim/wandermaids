from comments.models import Comment
from rest_framework import viewsets
from .serializers import CommentPostSerializer
from .serializers import CommentGetSerializer



class CommentPostViewSet(viewsets.ModelViewSet):

    serializer_class = CommentPostSerializer

    http_method_names = ['post']

class CommentGetViewSet(viewsets.ModelViewSet):

    serializer_class = CommentGetSerializer

    http_method_names = ['get']

    queryset = Comment.objects.all()
    queryset = queryset.filter(approved = True)