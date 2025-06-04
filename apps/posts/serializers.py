from rest_framework import serializers
from .models import Post, GroupPost

class PostSerializer(serializers.ModelSerializer):
    author_name = serializers.ReadOnlyField(source="author.username")
    #comment_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Post
        fields = (
            "post_id", "title", "content", "category", "group",
            "author", "author_name", "created_at", "updated_at",
            "views", 
        )
        read_only_fields = ("author",)

    def get_comment_count(self, obj):
        return obj.comments.count()

class GroupPostSerializer(serializers.ModelSerializer):
    author_name = serializers.ReadOnlyField(source="author.username")

    class Meta:
        model = GroupPost
        fields = ("gpost_id", "group", "title", "content", "author", "author_name", "created_at")
        read_only_fields = ("author",)