from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User

@admin.register(User)
class UserAdmin(BaseUserAdmin):
    model = User
    list_display = ('id', 'username', 'email', 'nickname', 'date_joined', 'is_staff')
    list_filter = ('is_staff', 'is_superuser', 'is_active')
    search_fields = ('username', 'email')
    ordering = ('-date_joined',)

    readonly_fields = ('date_joined', 'last_login') 
    fieldsets = (
        (None, {'fields': ('username', 'email', 'password', 'nickname')}),
        ('Personal Info', {'fields': ('profile_image', 'bio')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important Dates', {'fields': ('last_login', 'date_joined')}),  
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'nickname', 'password1', 'password2'),
        }),
    )

