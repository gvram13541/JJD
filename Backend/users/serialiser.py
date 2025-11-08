from rest_framework import serializers
from django.contrib.auth.hashers import make_password, check_password
from .models import User

class RegisterSerialiser(serializers.Serializer):
    name = serializers.CharField(max_length=47)
    role = serializers.CharField(max_length=10)
    phone_number = serializers.CharField(max_length=10)
    email = serializers.EmailField(max_length=100)
    password = serializers.CharField(write_only = True, max_length=200)
    village = serializers.CharField(max_length=100)
    street = serializers.CharField(max_length=100)
    district = serializers.CharField(max_length=100)
    state = serializers.CharField(max_length=100)
    pincode = serializers.CharField(max_length=100)

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return User.objects.create(**validated_data)

class LoginSerialiser(serializers.Serializer):
    role = serializers.CharField()
    phone_number = serializers.CharField(required=False, allow_blank=True)
    email = serializers.EmailField(required=False, allow_blank=True)
    password = serializers.CharField(write_only = True)

    def validate(self, data):
        role = data.get('role')
        email = data.get('email')
        phone_number = data.get('phone_number')
        password = data.get('password')

        if not email and not phone_number:
            raise serializers.ValidationError("Please Provide either EmailID or Phone Number.")
        
        try:
            if email:
                user = User.objects.get(email=email, role=role)
            else:
                user = User.objects.get(phone_number=phone_number, role=role)
        except User.DoesNotExist:
            raise serializers.ValidationError("User Does not Exist. Please Register before loging in.")

        if not check_password(password, user.password):
            raise serializers.ValidationError("Incorrect Password.")
        
        data['user'] = user
        return data

class UserSerialiser(serializers.Serializer):
    name = serializers.CharField(max_length=47)
    role = serializers.CharField(max_length=10)
    phone_number = serializers.CharField(max_length=10)
    email = serializers.EmailField(max_length=100)
    village = serializers.CharField(max_length=100)
    street = serializers.CharField(max_length=100)
    district = serializers.CharField(max_length=100)
    state = serializers.CharField(max_length=100)
    pincode = serializers.CharField(max_length=100)
