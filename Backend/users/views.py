from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import User, Address
from .serialiser import RegisterSerialiser, LoginSerialiser, UserSerialiser, AddressSerialiser

@method_decorator(csrf_exempt, name='dispatch')
class RegisterView(APIView):
    def post(self, request):
        serialiser = RegisterSerialiser(data=request.data)
        if serialiser.is_valid():
            user = serialiser.save()
            return Response({"message":f"User with name {user.name} Registered Successfully"}, status=status.HTTP_201_CREATED)
        return Response({"message":serialiser.errors}, status=status.HTTP_400_BAD_REQUEST)

@method_decorator(csrf_exempt, name='dispatch')
class LoginView(APIView):
    def post(self, request):        
        serializer = LoginSerialiser(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            serialized_user = UserSerialiser(user)
            request.session['user_id'] = user.id
            request.session['role'] = user.role
            request.session.save()
            print("SESSION AFTER LOGIN:")
            print("Session Key:", request.session.session_key)
            print("Session Data:", dict(request.session))
            print("Is Modified:", request.session.modified)
            return Response({"message": "Login Successful", "user": serialized_user.data})
        return Response({"message": serializer.errors}, status=400)


class LogoutView(APIView):
    def post(self, request):
        request.session.flush()
        return Response({"message": "Logged out successfully"}, status=status.HTTP_200_OK)
    
class GetAddressView(APIView):
    def get(self, request):
        user_id = request.session.get('user_id')
        print(f"SESSION AFTER GET ADDRESSES:{user_id}")
        print("Session Key:", request.session.session_key)
        print("Session Data:", dict(request.session))
        print("Is Modified:", request.session.modified)
        if not user_id:
            return Response({'message': 'User not Logged In'}, status=status.HTTP_401_UNAUTHORIZED)
        
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return Response({"message": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        
        addresses = user.addresses.all().order_by('-is_default', 'id')
        serializer = AddressSerialiser(addresses, many=True)

        return Response({"addresses": serializer.data}, status=status.HTTP_200_OK)