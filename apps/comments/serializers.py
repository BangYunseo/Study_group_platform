from rest_framework import serializers
from apps.accounts.serializers import UserSerializer
from .models import Comment

class CommentSerializer(serializers.ModelSerializer):
    # 내부 PK comment_id를 외부에 id로 노출
    id = serializers.ReadOnlyField(source="comment_id")
    # 작성자 정보는 읽기 전용
    author = UserSerializer(read_only=True)
    # author.username만 따로 보여주고 싶다면
    user_name = serializers.ReadOnlyField(source="author.username")

    class Meta:
        model = Comment
        # 여기에 모델 필드와 read-only 로 매핑한 필드만 나열
        fields = (
            "id",
            "post_type",
            "post_id",
            "author",
            "user_name",   # 필요하다면
            "content",
            "created_at",
        )
        read_only_fields = (
            "id",
            "author",
            "user_name",
            "created_at",
        )
