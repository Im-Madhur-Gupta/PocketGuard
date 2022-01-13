from datetime import timezone
from email.policy import default
from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.base_user import BaseUserManager
from django.conf import settings

class UserProfileManager(BaseUserManager):
    """Manager for user profiles"""

    def create_user(self, email, first_name,last_name, password=None):
        """Create a new user profile"""
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, first_name=first_name,last_name=last_name)

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, first_name,last_name, password):
        """Create and save a new superuser with given details"""
        user = self.create_user(email, first_name,last_name, password)

        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user

class UserProfile(AbstractBaseUser, PermissionsMixin):
    """Database model for users in the system"""
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255, default ="")
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserProfileManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def get_full_name(self):
        """Retrieve full name for user"""
        return self.first_name

    def get_short_name(self):
        """Retrieve short name of user"""
        return self.first_name

    def __str__(self):
        """Return string representation of user"""
        return self.email

class ProfileFeedItem(models.Model):
    """Profile Status Update"""
    user_profile = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    Monthly_limit = models.IntegerField(blank=False, null=True)
    Fruits_vegetables = models.IntegerField(blank=True, null=True)
    Fuel = models.IntegerField(blank=True, null=True)
    Clothes = models.IntegerField(blank=True, null=True)
    Transporation = models.IntegerField(blank=True, null=True)
    Entertainment = models.IntegerField(blank=True, null=True)
    Dining = models.IntegerField(blank=True, null=True)
    Liesure = models.IntegerField(blank=True, null=True)
    Grocery = models.IntegerField(blank=True, null=True)
    Electronics = models.IntegerField(blank=True, null=True)
    Furniture = models.IntegerField(blank=True, null=True)


    def __str__(self):
        """Return the model as a string"""
        return self.status_text