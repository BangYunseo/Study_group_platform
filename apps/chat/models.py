from django.db import models
from django.conf import settings
from apps.groups.models import Group

class ChatRoom(models.Model):
    room_id = models.BigAutoField(primary_key=True, db_column='room_id')
    group = models.ForeignKey(
        Group,
        on_delete=models.CASCADE,
        related_name='chat_rooms',
        db_column='group_id'
    )
    room_name = models.CharField(max_length=100, blank=True, db_column='room_name')
    created_at = models.DateTimeField(auto_now_add=True, db_column='created_at')

    def __str__(self):
        return self.room_name or f"Room {self.pk}"

    class Meta:
        db_table = 'chat_rooms'

class ChatMessage(models.Model):
    message_id = models.BigAutoField(primary_key=True, db_column='message_id')
    room = models.ForeignKey(
        ChatRoom,
        on_delete=models.CASCADE,
        related_name='messages',
        db_column='room_id'
    )
    sender = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        db_column='sender_id'
    )
    message_text = models.TextField(db_column='message_text')
    sent_at = models.DateTimeField(auto_now_add=True, db_column='sent_at')

    def __str__(self):
        return f"{self.sender}: {self.message_text[:30]}"

    class Meta:
        db_table = 'chat_messages'