from rest_framework import serializers
from .models import ChatRoom, ChatMessage

class ChatRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatRoom
        fields = ("room_id", "group", "room_name", "created_at")

class ChatMessageSerializer(serializers.ModelSerializer):
    sender_name = serializers.ReadOnlyField(source="sender.username")

    class Meta:
        model = ChatMessage
        fields = ("message_id", "room", "sender", "sender_name", "message_text", "sent_at")
        read_only_fields = ("sender",)