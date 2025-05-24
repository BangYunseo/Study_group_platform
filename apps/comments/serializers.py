from rest_framework import serializers
from .models import Comment

class CommentSerializer(serializers.ModelSerializer):
    user_name = serializers.ReadOnlyField(source="user.username")

    class Meta:
        model = Comment
        fields = ("id", "post_type", "object_id", "content", "user", "user_name", "created_at")
        read_only_fields = ("user",)

    post_type = serializers.SerializerMethodField()

    def get_post_type(self, obj):
        return obj.content_type.model