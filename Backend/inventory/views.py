from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Products
from .serialiser import ProductsSerialiser

class ProductsView(APIView):
    def get(self, request):
        user_id = request.session.get('user_id')
        if not user_id:
            return Response({'message':'User Not Logged In'}, status=status.HTTP_401_UNAUTHORIZED)
        
        item_details = Products.objects.all().order_by('id')
        inventory_serialiser = ProductsSerialiser(item_details, many = True)

        return Response({"itemsList":inventory_serialiser.data}, status=status.HTTP_200_OK)


