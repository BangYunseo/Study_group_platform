from rest_framework.routers import DefaultRouter
from .views import PostViewSet, GroupPostViewSet

router = DefaultRouter()
router.register(r"posts", PostViewSet, basename="post")
router.register(r"group_posts", GroupPostViewSet, basename="group_post")
urlpatterns = router.urls