from rest_framework import generics, permissions
from .models import Comment
from .serializers import CommentSerializer

class CommentListCreateView(generics.ListCreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        post_type = self.request.query_params.get("post_type")
        post_id   = self.request.query_params.get("post_id")
        if post_type and post_id:
            # 모델의 필드명(post_type, post_id)으로 필터링
            return Comment.objects.filter(
                post_type=post_type,
                post_id=post_id
            ).select_related("author")
        return Comment.objects.none()

    def perform_create(self, serializer):
        # validated_data 에는 post_type, post_id, content 만 들어 있으므로
        # author 만 추가로 지정해 주면 됩니다.
        serializer.save(author=self.request.user)
