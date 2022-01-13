from rest_framework import serializers
from . import models


class HelloSerializer(serializers.Serializer):
    """Serializes a name field for testing out APIView"""
    name = serializers.CharField(max_length=10)
    
class UserProfileSerialier(serializers.ModelSerializer):
    class Meta:
        model = models.UserProfile
        fields = ('id', 'email', 'first_name','last_name', 'password')
        extra_kwargs = {
            'password': {
                'write_only': True,
                'style': {'input_type': 'password'}
            }
        }
    
    def create(self, validated_data):
        user = models.UserProfile.objects.create_user(
            email = validated_data['email'],
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name'],
            password = validated_data['password']
        )
        
        return user

class ProfileFeedItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProfileFeedItem
        fields = ('id', 'user_profile', 'Monthly_limit','Fruits_vegetables','Fuel','Clothes','Transporation','Entertainment','Dining','Liesure','Grocery','Electronics','Furniture')
        extra_kwargs = {'user_profile': {'read_only': True}}