from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Inventory
from .serialiser import InventorySerialiser

class InventoryView(APIView):
    def get(self, request):
        user_id = request.session.get('user_id')
        if not user_id:
            return Response({'message':'User Not Logged In'}, status=status.HTTP_401_UNAUTHORIZED)
        
        item_details = Inventory.objects.all().order_by('id')
        inventory_serialiser = InventorySerialiser(item_details, many = True)

        return Response(data=inventory_serialiser.data, status=status.HTTP_200_OK)


