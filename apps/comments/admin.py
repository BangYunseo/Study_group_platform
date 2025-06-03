from django.contrib import admin
from .models import Comment

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('comment_id', 'author', 'post_reference', 'content', 'created_at')
    search_fields = ('content', 'author__username')
    list_filter = ('post_type', 'created_at')

    def post_reference(self, obj):
        return f"{obj.post_type} #{obj.post_id}"
    post_reference.short_description = 'Target Post'
