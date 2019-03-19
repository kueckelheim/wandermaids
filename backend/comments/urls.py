from rest_framework import routers
from .api import CommentPostViewSet
from .api import CommentGetViewSet

router = routers.DefaultRouter()
router.register('api/postcomment', CommentPostViewSet, 'postcomment')
router.register('api/getcomments', CommentGetViewSet, 'getcomments')

urlpatterns = router.urls