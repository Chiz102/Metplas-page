from rest_framework import serializers
from .models import Category, SubCategory, Product, ContactMessage, CompanyInfo


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'id', 'name', 'slug', 'short_description', 'description',
            'specifications', 'image', 'gallery', 'is_featured', 'order'
        ]


class SubCategorySerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)
    products_count = serializers.SerializerMethodField()
    
    class Meta:
        model = SubCategory
        fields = ['id', 'name', 'slug', 'description', 'image', 'products', 'products_count']
    
    def get_products_count(self, obj):
        return obj.products.filter(is_active=True).count()


class SubCategoryListSerializer(serializers.ModelSerializer):
    """Serializer simplificado para listados"""
    products_count = serializers.SerializerMethodField()
    
    class Meta:
        model = SubCategory
        fields = ['id', 'name', 'slug', 'description', 'image', 'products_count']
    
    def get_products_count(self, obj):
        return obj.products.filter(is_active=True).count()


class CategorySerializer(serializers.ModelSerializer):
    subcategories = SubCategoryListSerializer(many=True, read_only=True)
    
    class Meta:
        model = Category
        fields = [
            'id', 'name', 'slug', 'category_type', 'description',
            'icon', 'image', 'subcategories'
        ]


class CategoryListSerializer(serializers.ModelSerializer):
    """Serializer simplificado para listados"""
    subcategories_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'category_type', 'description', 'icon', 'image', 'subcategories_count']
    
    def get_subcategories_count(self, obj):
        return obj.subcategories.filter(is_active=True).count()


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email', 'phone', 'company', 'subject', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']


class CompanyInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyInfo
        fields = '__all__'

