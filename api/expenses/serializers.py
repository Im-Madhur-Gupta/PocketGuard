from rest_framework import serializers
from .models import expenses_Model


class expensesSerializer(serializers.ModelSerializer):
    class Meta:
        model = expenses_Model
        fields = "__all__"