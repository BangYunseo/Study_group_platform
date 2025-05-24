from rest_framework import generics, permissions
from .models import ChatRoom, ChatMessage
from .serializers import ChatRoomSerializer, ChatMessageSerializer

class ChatRoomListCreateView(generics.ListCreateAPIView):
    serializer_class = ChatRoomSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        group_id = self.kwargs.get("group_id")
        return ChatRoom.objects.filter(group_id=group_id)

    def perform_create(self, serializer):
        serializer.save()

class ChatMessageListCreateView(generics.ListCreateAPIView):
    serializer_class = ChatMessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        room_id = self.kwargs.get("room_id")
        return ChatMessage.objects.filter(room_id=room_id).select_related("sender")

    def perform_create(self, serializer):
        serializer.save(sender=self.request.user)