from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Supplier, Category, Product, ContactMessage, CompanyInfo
from .serializers import (
    SupplierSerializer, SupplierDetailSerializer,
    CategorySerializer, ProductSerializer,
    ContactMessageSerializer, CompanyInfoSerializer
)


class SupplierViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoint para proveedores"""
    queryset = Supplier.objects.filter(is_active=True)
    lookup_field = 'slug'
    
    def get_serializer_class(self):
        if self.action == 'retrieve':
            return SupplierDetailSerializer
        return SupplierSerializer
    
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoint para categorías"""
    queryset = Category.objects.filter(is_active=True)
    serializer_class = CategorySerializer
    lookup_field = 'slug'
    
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context
    
    @action(detail=False, methods=['get'])
    def by_type(self, request):
        """Obtener categorías agrupadas por tipo"""
        category_type = request.query_params.get('type', None)
        if category_type:
            categories = self.queryset.filter(category_type=category_type)
        else:
            categories = self.queryset
        serializer = CategorySerializer(categories, many=True, context={'request': request})
        return Response(serializer.data)


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoint para productos"""
    queryset = Product.objects.filter(is_active=True)
    serializer_class = ProductSerializer
    lookup_field = 'slug'
    
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context
    
    def get_queryset(self):
        queryset = self.queryset
        supplier_slug = self.request.query_params.get('supplier', None)
        category_slug = self.request.query_params.get('category', None)
        featured = self.request.query_params.get('featured', None)
        
        if supplier_slug:
            queryset = queryset.filter(supplier__slug=supplier_slug)
        if category_slug:
            queryset = queryset.filter(category__slug=category_slug)
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
            serializer = CompanyInfoSerializer(company, context={'request': request})
            return Response(serializer.data)
        return Response({
            'name': 'Metplastech Technologies SPA',
            'phone': '+569 9615 4315',
            'whatsapp': '+56996154315',
            'email': 'contacto@metplastech.cl',
            'address': 'Curicó – Región del Maule – Chile',
        })
