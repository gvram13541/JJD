from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Products, ProductVariants
from .serialiser import ProductsSerialiser, ProductVariantSerialiser, ProductAndVariantSerialiser

class ProductsView(APIView):
    def get(self, request):
        user_id = request.session.get('user_id')
        if not user_id:
            return Response({'message':'User Not Logged In'}, status=status.HTTP_401_UNAUTHORIZED)
        
        products = Products.objects.all().order_by('id')
        products_serialiser = ProductsSerialiser(products, many = True)

        return Response({"itemsList":products_serialiser.data}, status=status.HTTP_200_OK)


class ProductVariantView(APIView):
    def get(self, request):
        user_id = request.session.get('user_id')
        if not user_id:
            return Response({'message':'User Not Logged In'}, status=status.HTTP_401_UNAUTHORIZED)

        products_with_variants = ProductVariants.objects.select_related('product').all().order_by('id')
        print(products_with_variants)

        product_variant_serialiser = ProductVariantSerialiser(products_with_variants, many=True)
        print(product_variant_serialiser.data)

        return Response({"pwv":product_variant_serialiser.data}, status=status.HTTP_200_OK)
    
class ProductAndVariantView(APIView):
    """
    Docstring for ProductAndVariantView: Displays to the frontend products and respective vartiants in one response
    """
    def get(self, request):
        user_id = request.session.get('user_id')
        if not user_id:
            return Response({'message':'User Not Logger In'}, status=status.HTTP_401_UNAUTHORIZED)
        productsandvariants = Products.objects.prefetch_related('variants').all()
        serialiser = ProductAndVariantSerialiser(productsandvariants, many=True)
        return Response({'products_and_variants': serialiser.data}, status=status.HTTP_200_OK)
        
