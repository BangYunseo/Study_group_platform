from rest_framework import generics, permissions
from django.contrib.contenttypes.models import ContentType
from .models import Comment
from .serializers import CommentSerializer

class CommentListCreateView(generics.ListCreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        post_type = self.request.query_params.get("post_type")
        object_id = self.request.query_params.get("post_id")
        if post_type and object_id:
            ctype = ContentType.objects.get(model=post_type)
            return Comment.objects.filter(content_type=ctype, object_id=object_id).select_related("user")
        return Comment.objects.none()

    def perform_create(self, serializer):
        post_type = self.request.data.get("post_type")
        object_id = self.request.data.get("post_id")
        ctype = ContentType.objects.get(model=post_type)
        serializer.save(user=self.request.user, content_type=ctype, object_id=object_id)
