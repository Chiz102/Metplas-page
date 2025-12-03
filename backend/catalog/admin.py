from django.contrib import admin
from .models import Category, SubCategory, Product, ContactMessage, CompanyInfo


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'category_type', 'order', 'is_active']
    list_filter = ['category_type', 'is_active']
    prepopulated_fields = {'slug': ('name',)}
    ordering = ['order', 'name']


@admin.register(SubCategory)
class SubCategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'order', 'is_active']
    list_filter = ['category', 'is_active']
    prepopulated_fields = {'slug': ('name',)}
    ordering = ['category', 'order', 'name']


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'subcategory', 'is_featured', 'is_active', 'order']
    list_filter = ['subcategory__category', 'subcategory', 'is_featured', 'is_active']
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ['name', 'description']
    ordering = ['subcategory', 'order', 'name']


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

