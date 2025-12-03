from django.db import models


class Category(models.Model):
    """Categoría principal de productos (Equipos, Insumos, Servicios, I+D)"""
    CATEGORY_TYPES = [
        ('equipos', 'Equipos'),
        ('insumos', 'Insumos'),
        ('servicios', 'Servicios'),
        ('innovacion', 'Innovación y Desarrollo'),
    ]
    
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    category_type = models.CharField(max_length=20, choices=CATEGORY_TYPES)
    description = models.TextField(blank=True)
    icon = models.CharField(max_length=50, blank=True, help_text="Nombre del icono (ej: settings, build)")
    image = models.ImageField(upload_to='categories/', blank=True, null=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name_plural = "Categories"
        ordering = ['order', 'name']
    
    def __str__(self):
        return self.name


class SubCategory(models.Model):
    """Subcategoría de productos"""
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='subcategories')
    name = models.CharField(max_length=100)
    slug = models.SlugField()
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='subcategories/', blank=True, null=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    
    class Meta:
        verbose_name_plural = "Subcategories"
        ordering = ['order', 'name']
        unique_together = ['category', 'slug']
    
    def __str__(self):
        return f"{self.category.name} - {self.name}"


class Product(models.Model):
    """Producto o servicio"""
    subcategory = models.ForeignKey(SubCategory, on_delete=models.CASCADE, related_name='products')
    name = models.CharField(max_length=200)
    slug = models.SlugField()
    short_description = models.CharField(max_length=300, blank=True)
    description = models.TextField(blank=True)
    specifications = models.JSONField(default=dict, blank=True)
    image = models.ImageField(upload_to='products/', blank=True, null=True)
    gallery = models.JSONField(default=list, blank=True, help_text="Lista de URLs de imágenes adicionales")
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['order', 'name']
        unique_together = ['subcategory', 'slug']
    
    def __str__(self):
        return self.name


class ContactMessage(models.Model):
    """Mensajes de contacto"""
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    company = models.CharField(max_length=100, blank=True)
    subject = models.CharField(max_length=200)
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.name} - {self.subject}"


class CompanyInfo(models.Model):
    """Información de la empresa"""
    name = models.CharField(max_length=200, default="Metplastech Technologies SPA")
    slogan = models.CharField(max_length=300, blank=True)
    description = models.TextField(blank=True)
    about_us = models.TextField(blank=True)
    mission = models.TextField(blank=True)
    vision = models.TextField(blank=True)
    phone = models.CharField(max_length=20, default="+569 9615 4315")
    whatsapp = models.CharField(max_length=20, default="+56996154315")
    email = models.EmailField(default="contacto@metplastech.cl")
    address = models.TextField(default="Curicó – Región del Maule – Chile")
    logo = models.ImageField(upload_to='company/', blank=True, null=True)
    facebook = models.URLField(blank=True)
    instagram = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    
    class Meta:
        verbose_name = "Company Info"
        verbose_name_plural = "Company Info"
    
    def __str__(self):
        return self.name

