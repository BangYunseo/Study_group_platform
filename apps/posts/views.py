from rest_framework import viewsets, permissions
from .models import Post, GroupPost
from .serializers import PostSerializer, GroupPostSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().select_related("author")
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filterset_fields = ("category",)
    search_fields = ("title", "content")

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class GroupPostViewSet(viewsets.ModelViewSet):
    queryset = GroupPost.objects.all().select_related("author", "group")
    serializer_class = GroupPostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)