from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Category, SubCategory, Product, ContactMessage, CompanyInfo
from .serializers import (
    CategorySerializer, CategoryListSerializer,
    SubCategorySerializer, SubCategoryListSerializer,
    ProductSerializer, ContactMessageSerializer, CompanyInfoSerializer
)


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoint para categorías"""
    queryset = Category.objects.filter(is_active=True)
    lookup_field = 'slug'
    
    def get_serializer_class(self):
        if self.action == 'list':
            return CategoryListSerializer
        return CategorySerializer
    
    @action(detail=False, methods=['get'])
    def by_type(self, request):
        """Obtener categorías agrupadas por tipo"""
        category_type = request.query_params.get('type', None)
        if category_type:
            categories = self.queryset.filter(category_type=category_type)
        else:
            categories = self.queryset
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)


class SubCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoint para subcategorías"""
    queryset = SubCategory.objects.filter(is_active=True)
    lookup_field = 'slug'
    
    def get_serializer_class(self):
        if self.action == 'list':
            return SubCategoryListSerializer
        return SubCategorySerializer
    
    def get_queryset(self):
        queryset = self.queryset
        category_slug = self.request.query_params.get('category', None)
        if category_slug:
            queryset = queryset.filter(category__slug=category_slug)
        return queryset


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoint para productos"""
    queryset = Product.objects.filter(is_active=True)
    serializer_class = ProductSerializer
    lookup_field = 'slug'
    
    def get_queryset(self):
        queryset = self.queryset
        subcategory_slug = self.request.query_params.get('subcategory', None)
        category_slug = self.request.query_params.get('category', None)
        featured = self.request.query_params.get('featured', None)
        
        if subcategory_slug:
            queryset = queryset.filter(subcategory__slug=subcategory_slug)
        if category_slug:
            queryset = queryset.filter(subcategory__category__slug=category_slug)
        if featured:
            queryset = queryset.filter(is_featured=True)
        
        return queryset
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Obtener productos destacados"""
        featured = self.queryset.filter(is_featured=True)[:8]
        serializer = self.get_serializer(featured, many=True)
        return Response(serializer.data)


class ContactMessageView(APIView):
    """API endpoint para mensajes de contacto"""
    
    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {'message': 'Mensaje enviado correctamente. Nos pondremos en contacto pronto.'},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CompanyInfoView(APIView):
    """API endpoint para información de la empresa"""
    
    def get(self, request):
        company = CompanyInfo.objects.first()
        if company:
            serializer = CompanyInfoSerializer(company)
            return Response(serializer.data)
        # Devolver datos por defecto si no hay configuración
        return Response({
            'name': 'Metplastech Technologies SPA',
            'phone': '+569 9615 4315',
            'whatsapp': '+56996154315',
            'email': 'contacto@metplastech.cl',
            'address': 'Curicó – Región del Maule – Chile',
        })

