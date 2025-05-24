from django.urls import path
from .views import ChatRoomListCreateView, ChatMessageListCreateView

urlpatterns = [
    path("chat/rooms/<int:group_id>", ChatRoomListCreateView.as_view()),
    path("chat/messages/<int:room_id>", ChatMessageListCreateView.as_view()),
]