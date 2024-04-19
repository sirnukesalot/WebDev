from django.urls import path, include
from . import views

urlpatterns = [

    path('products/', views.ProductListAPI.as_view(), name='product-list'),
    path('products/<int:id>/', views.ProductDetailAPI.as_view(), name='product-detail'),
    path('categories/', views.CategoryListAPI.as_view(), name='category-list'),
    path('categories/<int:id>/', views.CategoryDetailAPI.as_view(), name='category-detail'),
    path('categories/<int:id>/products/', views.CategoryProductsAPI.as_view(), name='category-products')
]
