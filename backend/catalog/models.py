from django.db import models


class Category(models.Model):
    """Categoría principal de productos (Equipos, Insumos, Servicios, I+D)"""
    CATEGORY_TYPES = [
        ('equipos', 'Equipos'),
        ('insumos', 'Insumos'),
        ('servicios', 'Servicios'),
        ('innovacion', 'Innovación y Desarrollo'),
    ]
    
    # Campos bilingües
    name_es = models.CharField(max_length=100, verbose_name="Nombre (Español)")
    name_en = models.CharField(max_length=100, verbose_name="Name (English)", blank=True)
    description_es = models.TextField(blank=True, verbose_name="Descripción (Español)")
    description_en = models.TextField(blank=True, verbose_name="Description (English)")
    
    slug = models.SlugField(unique=True)
    category_type = models.CharField(max_length=20, choices=CATEGORY_TYPES)
    icon = models.CharField(max_length=50, blank=True, help_text="Nombre del icono (ej: settings, build)")
    image = models.ImageField(upload_to='categories/', blank=True, null=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name_plural = "Categories"
        ordering = ['order', 'name_es']
    
    def __str__(self):
        return self.name_es
    
    def get_name(self, lang='es'):
        """Retorna el nombre en el idioma especificado"""
        if lang == 'en' and self.name_en:
            return self.name_en
        return self.name_es
    
    def get_description(self, lang='es'):
        """Retorna la descripción en el idioma especificado"""
        if lang == 'en' and self.description_en:
            return self.description_en
        return self.description_es


class SubCategory(models.Model):
    """Subcategoría de productos"""
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='subcategories')
    
    # Campos bilingües
    name_es = models.CharField(max_length=100, verbose_name="Nombre (Español)")
    name_en = models.CharField(max_length=100, verbose_name="Name (English)", blank=True)
    description_es = models.TextField(blank=True, verbose_name="Descripción (Español)")
    description_en = models.TextField(blank=True, verbose_name="Description (English)")
    
    slug = models.SlugField()
    image = models.ImageField(upload_to='subcategories/', blank=True, null=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    
    class Meta:
        verbose_name_plural = "Subcategories"
        ordering = ['order', 'name_es']
        unique_together = ['category', 'slug']
    
    def __str__(self):
        return f"{self.category.name_es} - {self.name_es}"
    
    def get_name(self, lang='es'):
        if lang == 'en' and self.name_en:
            return self.name_en
        return self.name_es
    
    def get_description(self, lang='es'):
        if lang == 'en' and self.description_en:
            return self.description_en
        return self.description_es


class Product(models.Model):
    """Producto o servicio"""
    subcategory = models.ForeignKey(SubCategory, on_delete=models.CASCADE, related_name='products')
    
    # Campos bilingües
    name_es = models.CharField(max_length=200, verbose_name="Nombre (Español)")
    name_en = models.CharField(max_length=200, verbose_name="Name (English)", blank=True)
    short_description_es = models.CharField(max_length=300, blank=True, verbose_name="Descripción corta (Español)")
    short_description_en = models.CharField(max_length=300, blank=True, verbose_name="Short description (English)")
    description_es = models.TextField(blank=True, verbose_name="Descripción (Español)")
    description_en = models.TextField(blank=True, verbose_name="Description (English)")
    
    slug = models.SlugField()
    specifications = models.JSONField(default=dict, blank=True)
    image = models.ImageField(upload_to='products/', blank=True, null=True)
    gallery = models.JSONField(default=list, blank=True, help_text="Lista de URLs de imágenes adicionales")
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['order', 'name_es']
        unique_together = ['subcategory', 'slug']
    
    def __str__(self):
        return self.name_es
    
    def get_name(self, lang='es'):
        if lang == 'en' and self.name_en:
            return self.name_en
        return self.name_es
    
    def get_short_description(self, lang='es'):
        if lang == 'en' and self.short_description_en:
            return self.short_description_en
        return self.short_description_es
    
    def get_description(self, lang='es'):
        if lang == 'en' and self.description_en:
            return self.description_en
        return self.description_es


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
    
    # Campos bilingües
    slogan_es = models.CharField(max_length=300, blank=True, verbose_name="Slogan (Español)")
    slogan_en = models.CharField(max_length=300, blank=True, verbose_name="Slogan (English)")
    description_es = models.TextField(blank=True, verbose_name="Descripción (Español)")
    description_en = models.TextField(blank=True, verbose_name="Description (English)")
    about_us_es = models.TextField(blank=True, verbose_name="Sobre nosotros (Español)")
    about_us_en = models.TextField(blank=True, verbose_name="About us (English)")
    mission_es = models.TextField(blank=True, verbose_name="Misión (Español)")
    mission_en = models.TextField(blank=True, verbose_name="Mission (English)")
    vision_es = models.TextField(blank=True, verbose_name="Visión (Español)")
    vision_en = models.TextField(blank=True, verbose_name="Vision (English)")
    
    phone = models.CharField(max_length=20, default="+569 9615 4315")
    whatsapp = models.CharField(max_length=20, default="+56996154315")
    email = models.EmailField(default="contacto@metplastech.cl")
    address_es = models.TextField(default="Curicó – Región del Maule – Chile", verbose_name="Dirección (Español)")
    address_en = models.TextField(default="Curicó – Maule Region – Chile", blank=True, verbose_name="Address (English)")
    logo = models.ImageField(upload_to='company/', blank=True, null=True)
    facebook = models.URLField(blank=True)
    instagram = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    
    class Meta:
        verbose_name = "Company Info"
        verbose_name_plural = "Company Info"
    
    def __str__(self):
        return self.name
    
    def get_slogan(self, lang='es'):
        if lang == 'en' and self.slogan_en:
            return self.slogan_en
        return self.slogan_es
    
    def get_description(self, lang='es'):
        if lang == 'en' and self.description_en:
            return self.description_en
        return self.description_es
    
    def get_about_us(self, lang='es'):
        if lang == 'en' and self.about_us_en:
            return self.about_us_en
        return self.about_us_es
    
    def get_mission(self, lang='es'):
        if lang == 'en' and self.mission_en:
            return self.mission_en
        return self.mission_es
    
    def get_vision(self, lang='es'):
        if lang == 'en' and self.vision_en:
            return self.vision_en
        return self.vision_es
    
    def get_address(self, lang='es'):
        if lang == 'en' and self.address_en:
            return self.address_en
        return self.address_es
