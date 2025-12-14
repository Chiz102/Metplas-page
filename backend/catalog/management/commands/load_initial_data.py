from django.core.management.base import BaseCommand
from catalog.models import Supplier, Category, Product, CompanyInfo


class Command(BaseCommand):
    help = 'Carga los datos iniciales del catálogo de Metplastech'

    def handle(self, *args, **options):
        self.stdout.write('Cargando datos iniciales...')

        # Company Info
        CompanyInfo.objects.get_or_create(
            pk=1,
            defaults={
                'name': 'Metplastech Technologies SPA',
                'slogan_es': 'Innovación y tecnología para la industria',
                'slogan_en': 'Innovation and technology for industry',
                'description_es': 'Soluciones tecnológicas e industriales de alta calidad para la industria chilena.',
                'description_en': 'High-quality technological and industrial solutions for the Chilean industry.',
                'about_us_es': 'Metplastech Technologies SPA nace de la necesidad de ofrecer al mercado chileno equipos e insumos industriales de alta calidad.',
                'about_us_en': 'Metplastech Technologies SPA was born from the need to offer the Chilean market high-quality industrial equipment and supplies.',
                'mission_es': 'Proveer a la industria chilena equipos, insumos y servicios de la más alta calidad.',
                'mission_en': 'To provide the Chilean industry with equipment, supplies and services of the highest quality.',
                'vision_es': 'Ser reconocidos como el principal referente en soluciones tecnológicas e industriales en Chile.',
                'vision_en': 'To be recognized as the main reference in technological and industrial solutions in Chile.',
                'address_es': 'Curicó – Región del Maule – Chile',
                'address_en': 'Curicó – Maule Region – Chile',
                'phone': '+569 9615 4315',
                'whatsapp': '+56996154315',
                'email': 'contacto@metplastech.cl',
            }
        )
        self.stdout.write(self.style.SUCCESS('✓ Información de empresa creada'))

        # Suppliers (Proveedores) - EJEMPLOS, cambiar por los reales
        jarvis, _ = Supplier.objects.get_or_create(
            slug='jarvis',
            defaults={
                'name': 'Jarvis',
                'description_es': 'Proveedor líder en equipos industriales de alta precisión.',
                'description_en': 'Leading supplier of high-precision industrial equipment.',
                'country': 'Alemania',
                'icon': 'precision_manufacturing',
                'color': '#1565c0',
                'order': 1,
            }
        )

        freund, _ = Supplier.objects.get_or_create(
            slug='freund',
            defaults={
                'name': 'Freund',
                'description_es': 'Especialistas en cuchillería industrial y herramientas de corte.',
                'description_en': 'Specialists in industrial cutlery and cutting tools.',
                'country': 'Alemania',
                'icon': 'content_cut',
                'color': '#d32f2f',
                'order': 2,
            }
        )

        dick, _ = Supplier.objects.get_or_create(
            slug='dick',
            defaults={
                'name': 'Dick',
                'description_es': 'Fabricante premium de cuchillos y herramientas profesionales.',
                'description_en': 'Premium manufacturer of professional knives and tools.',
                'country': 'Alemania',
                'icon': 'hardware',
                'color': '#2e7d32',
                'order': 3,
            }
        )

        otro_proveedor, _ = Supplier.objects.get_or_create(
            slug='proveedor-ejemplo',
            defaults={
                'name': 'Proveedor Ejemplo',
                'description_es': 'Descripción del proveedor ejemplo.',
                'description_en': 'Example supplier description.',
                'country': 'Chile',
                'icon': 'business',
                'color': '#7b1fa2',
                'order': 4,
            }
        )

        self.stdout.write(self.style.SUCCESS('✓ Proveedores creados'))

        # Categories (para filtrado adicional)
        Category.objects.get_or_create(
            slug='equipos',
            defaults={
                'name_es': 'Equipos',
                'name_en': 'Equipment',
                'category_type': 'equipos',
                'description_es': 'Equipos industriales de alta precisión.',
                'description_en': 'High-precision industrial equipment.',
                'icon': 'precision_manufacturing',
                'order': 1,
            }
        )

        Category.objects.get_or_create(
            slug='insumos',
            defaults={
                'name_es': 'Insumos',
                'name_en': 'Supplies',
                'category_type': 'insumos',
                'description_es': 'Insumos industriales de primera calidad.',
                'description_en': 'First-quality industrial supplies.',
                'icon': 'inventory_2',
                'order': 2,
            }
        )

        self.stdout.write(self.style.SUCCESS('✓ Categorías creadas'))

        # Productos de ejemplo
        Product.objects.get_or_create(
            supplier=jarvis,
            slug='trimmer-industrial-j100',
            defaults={
                'name_es': 'Trimmer Industrial J-100',
                'name_en': 'Industrial Trimmer J-100',
                'short_description_es': 'Equipo de corte de alta precisión.',
                'short_description_en': 'High-precision cutting equipment.',
                'description_es': 'El Trimmer Industrial J-100 es un equipo de corte de última generación diseñado para aplicaciones industriales exigentes.',
                'description_en': 'The Industrial Trimmer J-100 is a cutting-edge cutting equipment designed for demanding industrial applications.',
                'is_featured': True,
                'order': 1,
            }
        )

        Product.objects.get_or_create(
            supplier=freund,
            slug='cuchillo-deshuesador-f200',
            defaults={
                'name_es': 'Cuchillo Deshuesador F-200',
                'name_en': 'Boning Knife F-200',
                'short_description_es': 'Cuchillo profesional para deshuese.',
                'short_description_en': 'Professional boning knife.',
                'description_es': 'Cuchillo deshuesador de alta calidad con hoja de acero inoxidable y mango ergonómico.',
                'description_en': 'High-quality boning knife with stainless steel blade and ergonomic handle.',
                'is_featured': True,
                'order': 1,
            }
        )

        Product.objects.get_or_create(
            supplier=dick,
            slug='chaira-profesional-d300',
            defaults={
                'name_es': 'Chaira Profesional D-300',
                'name_en': 'Professional Steel D-300',
                'short_description_es': 'Chaira de afilado profesional.',
                'short_description_en': 'Professional sharpening steel.',
                'description_es': 'Chaira profesional para mantener el filo de tus cuchillos en óptimas condiciones.',
                'description_en': 'Professional steel to keep your knife edges in optimal condition.',
                'is_featured': True,
                'order': 1,
            }
        )

        self.stdout.write(self.style.SUCCESS('✓ Productos de ejemplo creados'))
        self.stdout.write(self.style.SUCCESS('\n¡Datos iniciales cargados exitosamente!'))
