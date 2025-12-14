from django.contrib import admin
from .models import Supplier, Category, Product, ContactMessage, CompanyInfo


@admin.register(Supplier)
class SupplierAdmin(admin.ModelAdmin):
    list_display = ['name', 'country', 'order', 'is_active']
    list_filter = ['is_active', 'country']
    prepopulated_fields = {'slug': ('name',)}
    ordering = ['order', 'name']
    fieldsets = (
        ('Información General', {
            'fields': ('name', 'slug', 'logo', 'website', 'country', 'icon', 'color')
        }),
        ('Descripción (Español)', {
            'fields': ('description_es',)
        }),
        ('Description (English)', {
            'fields': ('description_en',),
            'classes': ('collapse',)
        }),
        ('Configuración', {
            'fields': ('order', 'is_active')
        }),
    )


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name_es', 'name_en', 'category_type', 'order', 'is_active']
    list_filter = ['category_type', 'is_active']
    prepopulated_fields = {'slug': ('name_es',)}
    ordering = ['order', 'name_es']


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name_es', 'supplier', 'category', 'sku', 'is_featured', 'is_active', 'order']
    list_filter = ['supplier', 'category', 'is_featured', 'is_active']
    prepopulated_fields = {'slug': ('name_es',)}
    search_fields = ['name_es', 'name_en', 'sku', 'description_es', 'description_en']
    ordering = ['supplier', 'order', 'name_es']
    fieldsets = (
        ('Proveedor y Categoría', {
            'fields': ('supplier', 'category', 'sku')
        }),
        ('Español', {
            'fields': ('name_es', 'short_description_es', 'description_es')
        }),
        ('English', {
            'fields': ('name_en', 'short_description_en', 'description_en'),
            'classes': ('collapse',)
        }),
        ('Imágenes', {
            'fields': ('image', 'gallery')
        }),
        ('Especificaciones', {
            'fields': ('specifications',),
            'classes': ('collapse',)
        }),
        ('Configuración', {
            'fields': ('slug', 'is_featured', 'is_active', 'order')
        }),
    )


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'is_read', 'created_at']
    list_filter = ['is_read', 'created_at']
    search_fields = ['name', 'email', 'subject', 'message']
    readonly_fields = ['created_at']
    ordering = ['-created_at']


@admin.register(CompanyInfo)
class CompanyInfoAdmin(admin.ModelAdmin):
    list_display = ['name', 'phone', 'email']
    fieldsets = (
        ('Información General', {
            'fields': ('name', 'logo')
        }),
        ('Español', {
            'fields': ('slogan_es', 'description_es', 'about_us_es', 'mission_es', 'vision_es', 'address_es')
        }),
        ('English', {
            'fields': ('slogan_en', 'description_en', 'about_us_en', 'mission_en', 'vision_en', 'address_en'),
            'classes': ('collapse',)
        }),
        ('Contacto', {
            'fields': ('phone', 'whatsapp', 'email')
        }),
        ('Redes Sociales', {
            'fields': ('facebook', 'instagram', 'linkedin'),
            'classes': ('collapse',)
        }),
    )
