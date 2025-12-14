from rest_framework import serializers
from .models import Category, SubCategory, Product, ContactMessage, CompanyInfo


class TranslatedSerializerMixin:
    """Mixin para manejar traducciones en serializers"""
    
    def get_language(self):
        """Obtiene el idioma de la request"""
        request = self.context.get('request')
        if request:
            # Primero intenta obtener de query params (?lang=en)
            lang = request.query_params.get('lang')
            if lang in ['es', 'en']:
                return lang
            # Luego intenta obtener del header Accept-Language
            accept_lang = request.headers.get('Accept-Language', '')
            if 'en' in accept_lang.lower():
                return 'en'
        return 'es'


class ProductSerializer(TranslatedSerializerMixin, serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    short_description = serializers.SerializerMethodField()
    description = serializers.SerializerMethodField()
    
    class Meta:
        model = Product
        fields = [
            'id', 'name', 'slug', 'short_description', 'description',
            'specifications', 'image', 'gallery', 'is_featured', 'order'
        ]
    
    def get_name(self, obj):
        return obj.get_name(self.get_language())
    
    def get_short_description(self, obj):
        return obj.get_short_description(self.get_language())
    
    def get_description(self, obj):
        return obj.get_description(self.get_language())


class SubCategorySerializer(TranslatedSerializerMixin, serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    description = serializers.SerializerMethodField()
    products = serializers.SerializerMethodField()
    products_count = serializers.SerializerMethodField()
    
    class Meta:
        model = SubCategory
        fields = ['id', 'name', 'slug', 'description', 'image', 'products', 'products_count']
    
    def get_name(self, obj):
        return obj.get_name(self.get_language())
    
    def get_description(self, obj):
        return obj.get_description(self.get_language())
    
    def get_products(self, obj):
        products = obj.products.filter(is_active=True)
        return ProductSerializer(products, many=True, context=self.context).data
    
    def get_products_count(self, obj):
        return obj.products.filter(is_active=True).count()


class SubCategoryListSerializer(TranslatedSerializerMixin, serializers.ModelSerializer):
    """Serializer simplificado para listados"""
    name = serializers.SerializerMethodField()
    description = serializers.SerializerMethodField()
    products_count = serializers.SerializerMethodField()
    
    class Meta:
        model = SubCategory
        fields = ['id', 'name', 'slug', 'description', 'image', 'products_count']
    
    def get_name(self, obj):
        return obj.get_name(self.get_language())
    
    def get_description(self, obj):
        return obj.get_description(self.get_language())
    
    def get_products_count(self, obj):
        return obj.products.filter(is_active=True).count()


class CategorySerializer(TranslatedSerializerMixin, serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    description = serializers.SerializerMethodField()
    subcategories = serializers.SerializerMethodField()
    
    class Meta:
        model = Category
        fields = [
            'id', 'name', 'slug', 'category_type', 'description',
            'icon', 'image', 'subcategories'
        ]
    
    def get_name(self, obj):
        return obj.get_name(self.get_language())
    
    def get_description(self, obj):
        return obj.get_description(self.get_language())
    
    def get_subcategories(self, obj):
        subcategories = obj.subcategories.filter(is_active=True)
        return SubCategoryListSerializer(subcategories, many=True, context=self.context).data


class CategoryListSerializer(TranslatedSerializerMixin, serializers.ModelSerializer):
    """Serializer simplificado para listados"""
    name = serializers.SerializerMethodField()
    description = serializers.SerializerMethodField()
    subcategories_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'category_type', 'description', 'icon', 'image', 'subcategories_count']
    
    def get_name(self, obj):
        return obj.get_name(self.get_language())
    
    def get_description(self, obj):
        return obj.get_description(self.get_language())
    
    def get_subcategories_count(self, obj):
        return obj.subcategories.filter(is_active=True).count()


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email', 'phone', 'company', 'subject', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']


class CompanyInfoSerializer(TranslatedSerializerMixin, serializers.ModelSerializer):
    slogan = serializers.SerializerMethodField()
    description = serializers.SerializerMethodField()
    about_us = serializers.SerializerMethodField()
    mission = serializers.SerializerMethodField()
    vision = serializers.SerializerMethodField()
    address = serializers.SerializerMethodField()
    
    class Meta:
        model = CompanyInfo
        fields = [
            'id', 'name', 'slogan', 'description', 'about_us', 'mission', 'vision',
            'phone', 'whatsapp', 'email', 'address', 'logo', 'facebook', 'instagram', 'linkedin'
        ]
    
    def get_slogan(self, obj):
        return obj.get_slogan(self.get_language())
    
    def get_description(self, obj):
        return obj.get_description(self.get_language())
    
    def get_about_us(self, obj):
        return obj.get_about_us(self.get_language())
    
    def get_mission(self, obj):
        return obj.get_mission(self.get_language())
    
    def get_vision(self, obj):
        return obj.get_vision(self.get_language())
    
    def get_address(self, obj):
        return obj.get_address(self.get_language())
