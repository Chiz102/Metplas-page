from django.contrib import admin
from .models import Category, SubCategory, Product, ContactMessage, CompanyInfo


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name_es', 'name_en', 'category_type', 'order', 'is_active']
    list_filter = ['category_type', 'is_active']
    prepopulated_fields = {'slug': ('name_es',)}
    ordering = ['order', 'name_es']
    fieldsets = (
        ('Español', {
            'fields': ('name_es', 'description_es')
        }),
        ('English', {
            'fields': ('name_en', 'description_en'),
            'classes': ('collapse',)
        }),
        ('Configuración', {
            'fields': ('slug', 'category_type', 'icon', 'image', 'order', 'is_active')
        }),
    )


@admin.register(SubCategory)
class SubCategoryAdmin(admin.ModelAdmin):
    list_display = ['name_es', 'name_en', 'category', 'order', 'is_active']
    list_filter = ['category', 'is_active']
    prepopulated_fields = {'slug': ('name_es',)}
    ordering = ['category', 'order', 'name_es']
    fieldsets = (
        ('Español', {
            'fields': ('name_es', 'description_es')
        }),
        ('English', {
            'fields': ('name_en', 'description_en'),
            'classes': ('collapse',)
        }),
        ('Configuración', {
            'fields': ('category', 'slug', 'image', 'order', 'is_active')
        }),
    )


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name_es', 'name_en', 'subcategory', 'is_featured', 'is_active', 'order']
    list_filter = ['subcategory__category', 'subcategory', 'is_featured', 'is_active']
    prepopulated_fields = {'slug': ('name_es',)}
    search_fields = ['name_es', 'name_en', 'description_es', 'description_en']
    ordering = ['subcategory', 'order', 'name_es']
    fieldsets = (
        ('Español', {
            'fields': ('name_es', 'short_description_es', 'description_es')
        }),
        ('English', {
            'fields': ('name_en', 'short_description_en', 'description_en'),
            'classes': ('collapse',)
        }),
        ('Configuración', {
            'fields': ('subcategory', 'slug', 'specifications', 'image', 'gallery', 'is_featured', 'is_active', 'order')
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
