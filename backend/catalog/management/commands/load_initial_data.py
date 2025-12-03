from django.core.management.base import BaseCommand
from catalog.models import Category, SubCategory, CompanyInfo


class Command(BaseCommand):
    help = 'Carga los datos iniciales del catálogo de Metplastech'

    def handle(self, *args, **options):
        self.stdout.write('Cargando datos iniciales...')

        # Company Info
        CompanyInfo.objects.get_or_create(
            pk=1,
            defaults={
                'name': 'Metplastech Technologies SPA',
                'slogan': 'Innovación y tecnología para la industria',
                'description': 'Soluciones tecnológicas e industriales de alta calidad para la industria chilena.',
                'about_us': 'Metplastech Technologies SPA nace de la necesidad de ofrecer al mercado chileno equipos e insumos industriales de alta calidad, respaldados por un servicio técnico especializado y una atención personalizada.',
                'mission': 'Proveer a la industria chilena equipos, insumos y servicios de la más alta calidad, contribuyendo al desarrollo y la eficiencia operacional de nuestros clientes mediante soluciones innovadoras y un servicio de excelencia.',
                'vision': 'Ser reconocidos como el principal referente en soluciones tecnológicas e industriales en Chile, destacando por nuestra innovación, calidad y compromiso con el éxito de nuestros clientes.',
                'phone': '+569 9615 4315',
                'whatsapp': '+56996154315',
                'email': 'contacto@metplastech.cl',
                'address': 'Curicó – Región del Maule – Chile',
            }
        )
        self.stdout.write(self.style.SUCCESS('✓ Información de empresa creada'))

        # Categories
        equipos, _ = Category.objects.get_or_create(
            slug='equipos',
            defaults={
                'name': 'Equipos',
                'category_type': 'equipos',
                'description': 'Equipos de alta precisión para la industria. Maquinaria confiable y tecnología de punta.',
                'icon': 'precision_manufacturing',
                'order': 1,
            }
        )

        insumos, _ = Category.objects.get_or_create(
            slug='insumos',
            defaults={
                'name': 'Insumos',
                'category_type': 'insumos',
                'description': 'Insumos industriales de primera calidad. Materiales certificados para tu operación.',
                'icon': 'inventory_2',
                'order': 2,
            }
        )

        servicios, _ = Category.objects.get_or_create(
            slug='servicios',
            defaults={
                'name': 'Servicios',
                'category_type': 'servicios',
                'description': 'Servicios técnicos especializados. Soporte profesional y mantenimiento de calidad.',
                'icon': 'engineering',
                'order': 3,
            }
        )

        innovacion, _ = Category.objects.get_or_create(
            slug='innovacion',
            defaults={
                'name': 'Innovación y Desarrollo',
                'category_type': 'innovacion',
                'description': 'Soluciones innovadoras para tu industria. Desarrollo de proyectos a medida.',
                'icon': 'lightbulb',
                'order': 4,
            }
        )
        self.stdout.write(self.style.SUCCESS('✓ Categorías creadas'))

        # SubCategories - Equipos
        SubCategory.objects.get_or_create(
            category=equipos,
            slug='equipos-trimmer',
            defaults={
                'name': 'Equipos Trimmer',
                'description': 'Equipos de corte y recorte de alta precisión para procesos industriales.',
                'order': 1,
            }
        )

        SubCategory.objects.get_or_create(
            category=equipos,
            slug='rectificadores',
            defaults={
                'name': 'Rectificadores',
                'description': 'Rectificadores industriales para procesos de acabado y pulido.',
                'order': 2,
            }
        )

        # SubCategories - Insumos
        SubCategory.objects.get_or_create(
            category=insumos,
            slug='agujas-inyectoras',
            defaults={
                'name': 'Agujas Inyectoras',
                'description': 'Agujas de inyección de alta precisión para diversos procesos industriales.',
                'order': 1,
            }
        )

        SubCategory.objects.get_or_create(
            category=insumos,
            slug='epp',
            defaults={
                'name': 'EPP',
                'description': 'Equipos de Protección Personal certificados y de alta calidad.',
                'order': 2,
            }
        )

        SubCategory.objects.get_or_create(
            category=insumos,
            slug='cuchillos-empunadura',
            defaults={
                'name': 'Cuchillos de Empuñadura',
                'description': 'Cuchillos industriales con empuñadura ergonómica y hojas de alta durabilidad.',
                'order': 3,
            }
        )

        self.stdout.write(self.style.SUCCESS('✓ Subcategorías creadas'))
        self.stdout.write(self.style.SUCCESS('\n¡Datos iniciales cargados exitosamente!'))

