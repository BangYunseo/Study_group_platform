from rest_framework import serializers
from .models import Group, GroupMember
from apps.accounts.serializers import UserSerializer

class GroupSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source="created_by.username")
    members_count = serializers.IntegerField(source="memberships.count", read_only=True)

    class Meta:
        model = Group
        fields = ("id", "group_name", "description", "category", "is_online", "owner", "members_count", "created_at")

class GroupMemberSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = GroupMember
        fields = ("user", "role", "joined_at")