from rest_framework.serializers import Serializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth import authenticate, login, logout
from .models import User  
from .serializers import UserSerializer, LoginSerializer,KYCSerializer


class SignUpApi(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors)
        
        user = User.objects.create_user(**serializer.validated_data)
        return Response({"status": "User created successfully"}, status=status.HTTP_201_CREATED)


class LoginApi(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data = request.data)

        if not serializer.is_valid():
            return Response(serializer.errors)

        email = serializer.validated_data.get("email")
        password = serializer.validated_data.get("password")

        user = authenticate(email=email, password=password)

        if not user:
            return Response({"status": "Email id or password incorrect"}, status=status.HTTP_400_BAD_REQUEST)

        login(request, user)

        token, key = Token.objects.get_or_create(user=user)

        return Response(
                {
                    "status": "User logged in successfully", 
                    "Token": token.key
                },
                status=status.HTTP_200_OK
            )


class LogoutApi(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            request.user.auth_token.delete()
        except:
            return Response({"status": "Authentication failed"}, status=status.HTTP_400_BAD_REQUEST)

        logout(request)

        return Response({"status": "User logged out successfully"}, status=status.HTTP_200_OK)

class SignUpListAPI(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        signups = User.objects.all()
        serializer = UserSerializer(signups, many = True)
        return Response(serializer.data)


