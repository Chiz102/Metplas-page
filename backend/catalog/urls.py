from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CategoryViewSet, SubCategoryViewSet, ProductViewSet,
    ContactMessageView, CompanyInfoView
)

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'subcategories', SubCategoryViewSet)
router.register(r'products', ProductViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('contact/', ContactMessageView.as_view(), name='contact'),
    path('company/', CompanyInfoView.as_view(), name='company-info'),
]

