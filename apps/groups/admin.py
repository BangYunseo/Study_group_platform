from django.contrib import admin
from .models import Group, GroupMember

@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    list_display = ('group_id', 'group_name', 'category', 'is_online', 'created_by', 'created_at')
    search_fields = ('group_name', 'category')
    list_filter = ('is_online', 'created_at')
    readonly_fields = ('created_at',)

@admin.register(GroupMember)
class GroupMemberAdmin(admin.ModelAdmin):
    list_display = ('group', 'user', 'role', 'joined_at')
    list_filter = ('role', 'joined_at')
    search_fields = ('group__group_name', 'user__username')
