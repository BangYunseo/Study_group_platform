from django.contrib.auth.models import AbstractUser
from django.db import models

# class User(AbstractUser):
#     class Meta:
#         db_table = 'users'
#     email = models.EmailField(unique=True)
#     profile_image = models.ImageField(upload_to="profile/", null=True, blank=True)
#     bio = models.TextField(blank=True, null=True)

#     REQUIRED_FIELDS = ["email"]

#     def __str__(self):
#         return self.username
    
class User(AbstractUser):
    # AbstractUser already defines: username, password, email, first_name, last_name, date_joined
    # We map inherited fields to existing columns via db_column
    username = models.CharField(max_length=50, unique=True, db_column='username')
    email = models.EmailField(unique=True, db_column='email')
    password = models.CharField(max_length=128, db_column='password_hash')
    date_joined = models.DateTimeField(auto_now_add=True, db_column='joined_at')

    # Additional fields
    profile_image = models.CharField(max_length=255, null=True, blank=True, db_column='profile_image')
    bio = models.TextField(null=True, blank=True, db_column='bio')

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    class Meta:
        db_table = 'users'

    def __str__(self):
        return self.username