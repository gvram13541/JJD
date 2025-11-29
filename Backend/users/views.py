from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serialiser import RegisterSerialiser, LoginSerialiser, UserSerialiser

class RegisterView(APIView):
    def post(self, request):
        serialiser = RegisterSerialiser(data=request.data)
        if serialiser.is_valid():
            user = serialiser.save()
            return Response({"message":f"User with name {user.name} Registered Successfully"}, status=status.HTTP_201_CREATED)
        return Response({"message":serialiser.errors}, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    def post(self, request):        
        serializer = LoginSerialiser(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            serialized_user = UserSerialiser(user)
            request.session['user_id'] = user.id
            request.session['role'] = user.role
            return Response({"message": "Login Successful", "user": serialized_user.data})
        return Response({"message": serializer.errors}, status=400)


class LogoutView(APIView):
    def post(self, request):
        request.session.flush()
        return Response({"message": "Logged out successfully"}, status=status.HTTP_200_OK)