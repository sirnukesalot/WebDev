from rest_framework import generics
from rest_framework.response import Response
from .models import Product, Category
from django.shortcuts import render
from django.shortcuts import get_object_or_404, redirect

from .serializer import ProductSerializer, CategorySerializer


# Create your views here.
class ProductListAPI(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailAPI(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CategoryListAPI(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetailAPI(generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryProductsAPI(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        category_id = self.kwargs['id']

        return Product.objects.filter(category=category_id)
