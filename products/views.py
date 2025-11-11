from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer

# This view is for listing all products
class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# Add this new view for retrieving a single product
class ProductDetail(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer