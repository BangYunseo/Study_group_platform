from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import RegisterView, MeView, EmailLoginView

urlpatterns = [
    path("register/", RegisterView.as_view()),
    path("login/", EmailLoginView.as_view()),
    path("token/refresh/", TokenRefreshView.as_view()),
    path("me/", MeView.as_view()),
]