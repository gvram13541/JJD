from django.urls import path

from .views import ProductsView, ProductVariantView

urlpatterns = [
    path('getproducts/', ProductsView.as_view(), name='get_items'),
    path('getproductvariants/', ProductVariantView.as_view(), name='get_product_variants')
]