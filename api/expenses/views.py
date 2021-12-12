from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from rest_framework.serializers import Serializer
from .models import expenses_Model
from .serializers import expensesSerializer
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


class KYCApi(generics.CreateAPIView):
    permission_classes = [AllowAny]
    queryset = expenses_Model.objects.all()
    serializer_class = expensesSerializer