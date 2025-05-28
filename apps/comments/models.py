from django.db import models
from django.conf import settings
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey

class Comment(models.Model):
    comment_id = models.BigAutoField(primary_key=True, db_column='comment_id')
    post_type = models.CharField(max_length=10, choices=(('post', 'post'), ('group_post', 'group_post')), null=True, blank=True, db_column='post_type') 
    post_id   = models.BigIntegerField(null=True, blank=True) 
    author    = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, blank=True)
    content = models.TextField(db_column='content')
    created_at = models.DateTimeField(auto_now_add=True, db_column='created_at')

    def __str__(self):
        return f"Comment by {self.author}"

    class Meta:
        db_table = 'comments'
        indexes = [
            models.Index(fields=['post_type', 'post_id']),
        ]
