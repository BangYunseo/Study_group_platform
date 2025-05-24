from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Group, GroupMember
from .serializers import GroupSerializer, GroupMemberSerializer

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all().prefetch_related("memberships")
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filterset_fields = ("category", "is_online")
    search_fields = ("group_name", "description")

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

    @action(detail=True, methods=["post"], permission_classes=[permissions.IsAuthenticated])
    def join(self, request, pk=None):
        group = self.get_object()
        role = request.data.get("role", "member")
        gm, created = GroupMember.objects.get_or_create(group=group, user=request.user, defaults={"role": role})
        if not created:
            return Response({"detail": "이미 가입된 그룹입니다."}, status=status.HTTP_409_CONFLICT)
        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(detail=True, methods=["get"], permission_classes=[permissions.AllowAny])
    def members(self, request, pk=None):
        group = self.get_object()
        qs = group.memberships.select_related("user")
        serializer = GroupMemberSerializer(qs, many=True, context={"request": request})
        return Response(serializer.data)