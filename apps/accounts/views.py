from rest_framework import generics, permissions
from .models import User
from .serializers import RegisterSerializer, UserSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        print("회원가입 요청 데이터:", request.data)  # 요청 확인용 로그
        response = super().create(request, *args, **kwargs)
        print("응답 상태 코드:", response.status_code)  # 응답 코드 출력
        return response

class MeView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user

class EmailLoginSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        print("EmailLoginSerializer.validate() 진입")

        email = attrs.get("username")
        password = attrs.get("password")

        print("로그인 시도 이메일(username 필드):", email)
        print("전체 사용자 목록:", list(User.objects.values_list("email", flat=True)))

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError("이메일 또는 비밀번호가 올바르지 않습니다.")

        attrs["username"] = user.username
        return super().validate(attrs)



class EmailLoginView(TokenObtainPairView):
    serializer_class = EmailLoginSerializer

    def post(self, request, *args, **kwargs):
        print("EmailLoginView.post() 호출됨")
        return super().post(request, *args, **kwargs)
