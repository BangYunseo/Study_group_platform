from django.contrib import admin
from .models import Post, GroupPost

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('post_id', 'title', 'author', 'category', 'created_at')
    search_fields = ('title', 'content')
    list_filter = ('category', 'created_at')

@admin.register(GroupPost)
class GroupPostAdmin(admin.ModelAdmin):
    list_display = ('gpost_id', 'title', 'author', 'group', 'created_at')
    search_fields = ('title', 'content')
    list_filter = ('group', 'created_at')
