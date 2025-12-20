from rest_framework import serializers

class InventorySerialiser(serializers.Serializer):
    i_id = serializers.CharField(max_length=10)
    i_name = serializers.CharField(max_length=100)
    cost = serializers.DecimalField(decimal_places=10, max_digits=100)
    metric = serializers.CharField(max_length=50)
    image_path = serializers.CharField()