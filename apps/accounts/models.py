from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    # 기본 필드 (AbstractUser가 이미 정의한 것들을 덮어씀)
    username = models.CharField(max_length=50, unique=True, db_column='username')
    email = models.EmailField(unique=True, db_column='email')
    password = models.CharField(max_length=128, db_column='password_hash')
    date_joined = models.DateTimeField(auto_now_add=True, db_column='joined_at')

    # 추가 필드
    nickname = models.CharField(max_length=30, null=False, db_column='nickname')
    profile_image = models.CharField(max_length=255, null=True, blank=True, db_column='profile_image')
    bio = models.TextField(null=True, blank=True, db_column='bio')

    # 인증 관련 설정
    USERNAME_FIELD = 'username'  # 로그인에 사용할 필드
    REQUIRED_FIELDS = ['email']  # createsuperuser 시 필수

    class Meta:
        db_table = 'users'  # 실제 DB 테이블명

    def __str__(self):
        return self.username
