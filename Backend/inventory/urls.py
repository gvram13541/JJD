from django.urls import path

from .views import InventoryView

urlpatterns = [
    path('getitems/', InventoryView.as_view(), name='get_items')
]