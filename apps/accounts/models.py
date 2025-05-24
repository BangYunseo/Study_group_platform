from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    email = models.EmailField(unique=True)
    profile_image = models.ImageField(upload_to="profile/", null=True, blank=True)
    bio = models.TextField(blank=True, null=True)

    REQUIRED_FIELDS = ["email"]

    def __str__(self):
        return self.username