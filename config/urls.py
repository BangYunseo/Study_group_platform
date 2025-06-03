from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path("admin/", admin.site.urls),

    # Accounts (회원가입/로그인)
    path("api/users/", include("apps.accounts.urls")),

    # Study Groups
    path("api/groups/", include("apps.groups.urls")),

    # Posts
    path("api/posts/", include("apps.posts.urls")),

    # Comments
    path("api/comments/", include("apps.comments.urls")),

    # Chat
    path("api/chat/", include("apps.chat.urls")),

    # React index.html 연동 (루트 경로)
    path("", TemplateView.as_view(template_name="index.html")),
]
