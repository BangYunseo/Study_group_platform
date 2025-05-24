from django.db import models
from django.conf import settings
from apps.groups.models import Group

class ChatRoom(models.Model):
    group = models.ForeignKey(Group, on_delete=models.CASCADE, related_name="chat_rooms")
    room_name = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.room_name or f"Room {self.pk}"

class ChatMessage(models.Model):
    room = models.ForeignKey(ChatRoom, on_delete=models.CASCADE, related_name="messages")
    sender = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    message_text = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.sender}: {self.message_text[:30]}"