from rest_framework import serializers
from .models import Post, GroupPost

class PostSerializer(serializers.ModelSerializer):
    author_name = serializers.ReadOnlyField(source="author.username")

    class Meta:
        model = Post
        fields = ("id", "title", "content", "category", "group", "author", "author_name", "created_at", "updated_at")
        read_only_fields = ("author",)

class GroupPostSerializer(serializers.ModelSerializer):
    author_name = serializers.ReadOnlyField(source="author.username")

    class Meta:
        model = GroupPost
        fields = ("id", "group", "title", "content", "author", "author_name", "created_at")
        read_only_fields = ("author",)