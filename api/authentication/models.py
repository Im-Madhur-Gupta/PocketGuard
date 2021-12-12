from django.db import models
from django.contrib.auth.models import (
    BaseUserManager,
    AbstractBaseUser,
    PermissionsMixin
)

class UserManager(BaseUserManager):
    def create_user(self, firstname, lastname, email, password):
        if email is None:
            raise TypeError("Eamil address is required to create user")

        user = self.model(email = self.normalize_email(email), firstname=firstname, lastname=lastname)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        if email is None:
            raise TypeError("Email address is required to create super user")

        user = self.create_user(email, "ADMIN", password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

ROLES = [
    ("OWNER", "OWNER"),
    ("PARTICIPANT", "PARTICIPANT"),
    ("ADMIN", "ADMIN")
]

class User(AbstractBaseUser, PermissionsMixin):
    firstname = models.CharField(max_length=255, blank=True)
    lastname = models.CharField(max_length=255, blank=True)
    email = models.EmailField(max_length=255, db_index=True, unique=True)
    # zipcode =  models.IntegerField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    date_created = models.DateTimeField(auto_now_add=True)

    class Meta:
        app_label = "authentication"

    USERNAME_FIELD = "email"

    objects = UserManager()

    def __str__(self):
        return self.email

DEFAULT_ID = 1
class expenses_Model(models.Model):
    account = models.ForeignKey(
        User, on_delete=models.CASCADE, default=DEFAULT_ID
    )
    Monthly_limit = models.IntegerField(blank=False, null=True),
    Fruits_vegetables = models.IntegerField(blank=True, null=True),
    Fuel = models.IntegerField(blank=True, null=True),
    Clothes = models.IntegerField(blank=True, null=True),
    Transporation = models.IntegerField(blank=True, null=True),
    Entertainment = models.IntegerField(blank=True, null=True),
    Dining = models.IntegerField(blank=True, null=True),
    Liesure = models.IntegerField(blank=True, null=True),
    Grocery = models.IntegerField(blank=True, null=True),
    Electronics = models.IntegerField(blank=True, null=True),
    Furniture = models.IntegerField(blank=True, null=True),

    