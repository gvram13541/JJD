from rest_framework import serializers

class ProductsSerialiser(serializers.Serializer):
    i_id = serializers.CharField(max_length=10)
    i_name = serializers.CharField(max_length=100)
    image_path = serializers.CharField()


class ProductVariantSerialiser(serializers.Serializer):
    product = ProductsSerialiser()
    size = serializers.DecimalField(max_digits=10, decimal_places=2)
    metric = serializers.CharField(max_length=10)
    cost = serializers.DecimalField(max_digits=10, decimal_places=2)
    available = serializers.BooleanField(default=True)