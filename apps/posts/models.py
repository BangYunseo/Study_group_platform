from django.db import models
from django.conf import settings
from apps.groups.models import Group

class Post(models.Model):
    post_id = models.BigAutoField(primary_key=True, db_column='post_id')
    title = models.CharField(max_length=150, db_column='title')
    content = models.TextField(db_column='content')
    category = models.CharField(max_length=50, blank=True, db_column='category')
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='posts',
        db_column='author_id'
    )
    group = models.ForeignKey(
        Group,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='posts',
        db_column='group_id'
    )
    created_at = models.DateTimeField(auto_now_add=True, db_column='created_at')
    updated_at = models.DateTimeField(auto_now=True, db_column='updated_at')

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'posts'

class GroupPost(models.Model):
    gpost_id = models.BigAutoField(primary_key=True, db_column='gpost_id')
    group = models.ForeignKey(
        Group,
        on_delete=models.CASCADE,
        related_name='group_posts',
        db_column='group_id'
    )
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='group_posts',
        db_column='author_id'
    )
    title = models.CharField(max_length=150, db_column='title')
    content = models.TextField(db_column='content')
    created_at = models.DateTimeField(auto_now_add=True, db_column='created_at')

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'group_posts'