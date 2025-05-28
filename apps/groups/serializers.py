# apps/groups/serializers.py

from rest_framework import serializers
from .models import Group, GroupMember
from apps.accounts.serializers import UserSerializer

class GroupSerializer(serializers.ModelSerializer):
    # 모델의 PK인 group_id를 id라는 이름으로 노출
    id = serializers.ReadOnlyField(source="group_id")
    owner = serializers.ReadOnlyField(source="created_by.username")
    members_count = serializers.IntegerField(source="memberships.count", read_only=True)

    class Meta:
        model = Group
        fields = (
            "id",             # 이제 유효한 필드입니다
            "group_name",
            "description",
            "category",
            "is_online",
            "owner",
            "members_count",
            "created_at",
        )

class GroupMemberSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = GroupMember
        # 중복된 fields 선언을 제거하고, 실제 모델에 있는 필드만 남깁니다
        fields = (
            "user",
            "role",
            "joined_at",
        )