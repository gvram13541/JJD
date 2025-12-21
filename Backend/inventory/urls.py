from django.urls import path

from .views import ProductsView

urlpatterns = [
    path('getitems/', ProductsView.as_view(), name='get_items')
]