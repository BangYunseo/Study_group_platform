from django.db import models
from django.conf import settings

class Group(models.Model):
    group_id = models.BigAutoField(primary_key=True, db_column='group_id')
    group_name = models.CharField(max_length=100, db_column='group_name')
    description = models.TextField(blank=True, db_column='description')
    category = models.CharField(max_length=50, blank=True, db_column='category')
    is_online = models.BooleanField(default=False, db_column='is_online')
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='owned_groups',
        db_column='created_by'
    )
    created_at = models.DateTimeField(auto_now_add=True, db_column='created_at')

    def __str__(self):
        return self.group_name

    class Meta:
        db_table = 'groups'

class GroupMember(models.Model):
    group = models.ForeignKey(
        Group,
        on_delete=models.CASCADE,
        related_name='memberships',
        db_column='group_id'
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='memberships',
        db_column='user_id'
    )
    role = models.CharField(
        max_length=10,
        choices=(('member', 'Member'), ('admin', 'Admin')),
        default='member',
        db_column='role'
    )
    joined_at = models.DateTimeField(auto_now_add=True, db_column='joined_at')

    def __str__(self):
        return f"{self.user} in {self.group}"

    class Meta:
        db_table = 'group_members'
        unique_together = ('group', 'user')