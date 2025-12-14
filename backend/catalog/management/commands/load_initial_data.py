from django.core.management.base import BaseCommand
from catalog.models import Category, SubCategory, CompanyInfo


class Command(BaseCommand):
    help = 'Carga los datos iniciales del catálogo de Metplastech (bilingüe ES/EN)'

    def handle(self, *args, **options):
        self.stdout.write('Cargando datos iniciales bilingües...')

        # Company Info
        CompanyInfo.objects.get_or_create(
            pk=1,
            defaults={
                'name': 'Metplastech Technologies SPA',
                # Español
                'slogan_es': 'Innovación y tecnología para la industria',
                'description_es': 'Soluciones tecnológicas e industriales de alta calidad para la industria chilena.',
                'about_us_es': 'Metplastech Technologies SPA nace de la necesidad de ofrecer al mercado chileno equipos e insumos industriales de alta calidad, respaldados por un servicio técnico especializado y una atención personalizada.',
                'mission_es': 'Proveer a la industria chilena equipos, insumos y servicios de la más alta calidad, contribuyendo al desarrollo y la eficiencia operacional de nuestros clientes mediante soluciones innovadoras y un servicio de excelencia.',
                'vision_es': 'Ser reconocidos como el principal referente en soluciones tecnológicas e industriales en Chile, destacando por nuestra innovación, calidad y compromiso con el éxito de nuestros clientes.',
                'address_es': 'Curicó – Región del Maule – Chile',
                # English
                'slogan_en': 'Innovation and technology for industry',
                'description_en': 'High-quality technological and industrial solutions for the Chilean industry.',
                'about_us_en': 'Metplastech Technologies SPA was born from the need to offer the Chilean market high-quality industrial equipment and supplies, backed by specialized technical service and personalized attention.',
                'mission_en': 'To provide the Chilean industry with equipment, supplies and services of the highest quality, contributing to the development and operational efficiency of our clients through innovative solutions and excellent service.',
                'vision_en': 'To be recognized as the main reference in technological and industrial solutions in Chile, standing out for our innovation, quality and commitment to our clients\' success.',
                'address_en': 'Curicó – Maule Region – Chile',
                # Contact
                'phone': '+569 9615 4315',
                'whatsapp': '+56996154315',
                'email': 'contacto@metplastech.cl',
            }
        )
        self.stdout.write(self.style.SUCCESS('✓ Información de empresa creada'))

        # Categories
        equipos, _ = Category.objects.get_or_create(
            slug='equipos',
            defaults={
                'name_es': 'Equipos',
                'name_en': 'Equipment',
                'category_type': 'equipos',
                'description_es': 'Equipos de alta precisión para la industria. Maquinaria confiable y tecnología de punta.',
                'description_en': 'High-precision equipment for industry. Reliable machinery and cutting-edge technology.',
                'icon': 'precision_manufacturing',
                'order': 1,
            }
        )

        insumos, _ = Category.objects.get_or_create(
            slug='insumos',
            defaults={
                'name_es': 'Insumos',
                'name_en': 'Supplies',
                'category_type': 'insumos',
                'description_es': 'Insumos industriales de primera calidad. Materiales certificados para tu operación.',
                'description_en': 'First-quality industrial supplies. Certified materials for your operation.',
                'icon': 'inventory_2',
                'order': 2,
            }
        )

        servicios, _ = Category.objects.get_or_create(
            slug='servicios',
            defaults={
                'name_es': 'Servicios',
                'name_en': 'Services',
                'category_type': 'servicios',
                'description_es': 'Servicios técnicos especializados. Soporte profesional y mantenimiento de calidad.',
                'description_en': 'Specialized technical services. Professional support and quality maintenance.',
                'icon': 'engineering',
                'order': 3,
            }
        )

        innovacion, _ = Category.objects.get_or_create(
            slug='innovacion',
            defaults={
                'name_es': 'Innovación y Desarrollo',
                'name_en': 'Innovation & Development',
                'category_type': 'innovacion',
                'description_es': 'Soluciones innovadoras para tu industria. Desarrollo de proyectos a medida.',
                'description_en': 'Innovative solutions for your industry. Custom project development.',
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
                'name_es': 'Equipos Trimmer',
                'name_en': 'Trimmer Equipment',
                'description_es': 'Equipos de corte y recorte de alta precisión para procesos industriales.',
                'description_en': 'High-precision cutting and trimming equipment for industrial processes.',
                'order': 1,
            }
        )

        SubCategory.objects.get_or_create(
            category=equipos,
            slug='rectificadores',
            defaults={
                'name_es': 'Rectificadores',
                'name_en': 'Rectifiers',
                'description_es': 'Rectificadores industriales para procesos de acabado y pulido.',
                'description_en': 'Industrial rectifiers for finishing and polishing processes.',
                'order': 2,
            }
        )

        # SubCategories - Insumos
        SubCategory.objects.get_or_create(
            category=insumos,
            slug='agujas-inyectoras',
            defaults={
                'name_es': 'Agujas Inyectoras',
                'name_en': 'Injection Needles',
                'description_es': 'Agujas de inyección de alta precisión para diversos procesos industriales.',
                'description_en': 'High-precision injection needles for various industrial processes.',
                'order': 1,
            }
        )

        SubCategory.objects.get_or_create(
            category=insumos,
            slug='epp',
            defaults={
                'name_es': 'EPP',
                'name_en': 'PPE',
                'description_es': 'Equipos de Protección Personal certificados y de alta calidad.',
                'description_en': 'Certified and high-quality Personal Protective Equipment.',
                'order': 2,
            }
        )

        SubCategory.objects.get_or_create(
            category=insumos,
            slug='cuchillos-empunadura',
            defaults={
                'name_es': 'Cuchillos de Empuñadura',
                'name_en': 'Handle Knives',
                'description_es': 'Cuchillos industriales con empuñadura ergonómica y hojas de alta durabilidad.',
                'description_en': 'Industrial knives with ergonomic handles and high-durability blades.',
                'order': 3,
            }
        )

        self.stdout.write(self.style.SUCCESS('✓ Subcategorías creadas'))
        self.stdout.write(self.style.SUCCESS('\n¡Datos iniciales bilingües cargados exitosamente!'))
