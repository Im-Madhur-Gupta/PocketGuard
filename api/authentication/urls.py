from django.urls import path
from .views import SignUpApi, LoginApi, LogoutApi, KYCApi
from . import views

urlpatterns = [
    path("login/", LoginApi.as_view(), name="login"),
    path("logout/", LogoutApi.as_view(), name="logout"),
    path("signup/", SignUpApi.as_view(), name="signup"),
    path("kyc/", KYCApi.as_view(), name="kyc"),
]