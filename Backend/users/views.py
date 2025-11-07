from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serialiser import RegisterSerialiser, LoginSerialiser

class RegisterView(APIView):
    def post(self, request):
        serialiser = RegisterSerialiser(data=request.data)
        if serialiser.is_valid():
            user = serialiser.save()
            return Response({"message":f"User with name {user.name} Registered Successfully"}, status=status.HTTP_201_CREATED)
        return Response({"message":serialiser.errors}, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    def post(self, request):
        serialiser = LoginSerialiser(data=request.data)
        if serialiser.is_valid():
            user = serialiser.validated_data['user']
            return Response({"message":"Login Successful", "name":f"Welconme {user.name}"})
        return Response({"message":serialiser.errors}, status=status.HTTP_400_BAD_REQUEST)

