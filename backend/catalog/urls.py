from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    SupplierViewSet, CategoryViewSet, ProductViewSet,
    ContactMessageView, CompanyInfoView
)

router = DefaultRouter()
router.register(r'suppliers', SupplierViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('contact/', ContactMessageView.as_view(), name='contact'),
    path('company/', CompanyInfoView.as_view(), name='company-info'),
]
