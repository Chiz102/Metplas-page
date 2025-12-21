import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, urljoin
import os
import json
import re
import time

# Configuración de carpetas
CATALOG_PATH = "../src/assets/catalog"
IMAGES_PATH = "../src/assets/images/products"
SUPPLIERS_LOGOS_PATH = "../src/assets/images/suppliers"

# Headers para simular navegador
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

def slugify(text):
    """Convierte texto a slug"""
    text = text.lower().strip()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_-]+', '-', text)
    return text

def download_image(url, filepath):
    """Descarga una imagen"""
    try:
        response = requests.get(url, headers=HEADERS, timeout=10)
        if response.status_code == 200:
            os.makedirs(os.path.dirname(filepath), exist_ok=True)
            with open(filepath, 'wb') as f:
                f.write(response.content)
            print(f"  ✓ Imagen descargada: {os.path.basename(filepath)}")
            return True
    except Exception as e:
        print(f"  ✗ Error descargando imagen: {e}")
    return False

def scrape_steen():
    """Scraper para Steen - Equipos para pescado y aves"""
    print("\n" + "="*50)
    print("SCRAPING: STEEN")
    print("="*50)
    
    urls = [
        "https://www.steen.be/product/fin-tail-head-cutter-for-whole-flatfish-and-other-fish-up-to-25mm/",
        "https://www.steen.be/product/manual-electric-pinbone-remover-for-pin-bone-lateral-bones-salmonids-more/",
        "https://www.steen.be/product/electric-manual-fish-descaling-machine-for-whole-fish/",
        "https://www.steen.be/product/st600sk-free-standing-poultry-skinner/",
        "https://www.steen.be/product/st700k-automatic-skinning-machine-for-poultry/"
    ]
    
    products = []
    
    for url in urls:
        try:
            print(f"\nProcesando: {url}")
            response = requests.get(url, headers=HEADERS, timeout=10)
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Extraer título
            title_tag = soup.find('h1', class_='product_title') or soup.find('h1')
            title = title_tag.text.strip() if title_tag else url.split('/')[-2].replace('-', ' ').title()
            
            # Extraer imagen
            img_tag = soup.find('img', class_='wp-post-image') or soup.find('div', class_='woocommerce-product-gallery__image')
            img_url = None
            if img_tag:
                img_url = img_tag.get('src') or img_tag.get('data-src')
                if img_tag.name == 'div':
                    img_inner = img_tag.find('img')
                    if img_inner:
                        img_url = img_inner.get('src')
            
            # Descargar imagen
            img_filename = f"{slugify(title)}.jpg"
            if img_url:
                download_image(img_url, f"{IMAGES_PATH}/{img_filename}")
            
            products.append({
                "provider": "steen",
                "category": "Fish & Poultry Equipment",
                "category_es": "Equipos para Pescado y Aves",
                "item_name": title,
                "item_name_es": title,  # Mantener en inglés por ahora
                "image_path": f"images/{img_filename}",
                "image_url": img_url or ""
            })
            
            time.sleep(1)  # Pausa para no sobrecargar el servidor
            
        except Exception as e:
            print(f"  Error: {e}")
    
    return {
        "slug": "steen",
        "name": "Steen",
        "description": "Fabricante belga especializado en equipos de procesamiento para pescado y aves",
        "description_en": "Belgian manufacturer specialized in fish and poultry processing equipment",
        "country": "Bélgica",
        "country_en": "Belgium",
        "website": "https://www.steen.be",
        "icon": "set_meal",
        "color": "#1976d2",
        "products": products,
        "categories": [
            {
                "file": "fish-poultry-equipment.json",
                "name_es": "Equipos para Pescado y Aves",
                "name_en": "Fish & Poultry Equipment",
                "icon": "set_meal"
            }
        ]
    }

def scrape_fabretall():
    """Scraper para Fabretall - Cuchillos y equipos"""
    print("\n" + "="*50)
    print("SCRAPING: FABRETALL")
    print("="*50)
    
    urls = [
        ("https://fabretall.com/es/producto/borncut-bc100/", "Equipos de Corte", "Cutting Equipment"),
        ("https://fabretall.com/es/producto/borncut-bc300/", "Equipos de Corte", "Cutting Equipment"),
        ("https://fabretall.com/es/producto/almacen-completamente-automatizado/", "Automatización", "Automation"),
        ("https://fabretall.com/es/producto/cuchillo-carnicero-3claveles/", "Cuchillos", "Knives"),
        ("https://fabretall.com/es/producto/cesta-porta-cuchillos/", "Accesorios", "Accessories"),
        ("https://fabretall.com/es/producto/afilador-x1/", "Afiladores", "Sharpeners"),
        ("https://fabretall.com/es/producto/cuchillo-filetear-3claveles/", "Cuchillos", "Knives"),
        ("https://fabretall.com/es/producto/cuchillo-degollar-pulir-3claveles/", "Cuchillos", "Knives"),
        ("https://fabretall.com/es/producto/cuchillo-deshuesar-curvado-3claveles/", "Cuchillos", "Knives"),
        ("https://fabretall.com/es/producto/cuchillo-carnicero-securicoupe/", "Cuchillos", "Knives"),
        ("https://fabretall.com/es/producto/cuchillo-deshuesar-ancho-caribou/", "Cuchillos", "Knives"),
        ("https://fabretall.com/es/producto/cuchillo-degollador-securicoupe/", "Cuchillos", "Knives"),
        ("https://fabretall.com/es/producto/cuchillo-deshuesar-recto-estrecho-3claveles/", "Cuchillos", "Knives"),
    ]
    
    products = []
    categories_set = set()
    
    for url, cat_es, cat_en in urls:
        try:
            print(f"\nProcesando: {url}")
            response = requests.get(url, headers=HEADERS, timeout=10)
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Extraer título
            title_tag = soup.find('h1', class_='product_title') or soup.find('h1')
            title = title_tag.text.strip() if title_tag else url.split('/')[-2].replace('-', ' ').title()
            
            # Extraer imagen
            img_tag = soup.find('img', class_='wp-post-image')
            if not img_tag:
                gallery = soup.find('div', class_='woocommerce-product-gallery__image')
                if gallery:
                    img_tag = gallery.find('img')
            
            img_url = None
            if img_tag:
                img_url = img_tag.get('src') or img_tag.get('data-src')
            
            # Descargar imagen
            img_filename = f"{slugify(title)}.jpg"
            if img_url:
                download_image(img_url, f"{IMAGES_PATH}/{img_filename}")
            
            products.append({
                "provider": "fabretall",
                "category": cat_en,
                "category_es": cat_es,
                "item_name": title,
                "item_name_es": title,
                "image_path": f"images/{img_filename}",
                "image_url": img_url or ""
            })
            
            categories_set.add((cat_es, cat_en))
            time.sleep(1)
            
        except Exception as e:
            print(f"  Error: {e}")
    
    # Generar lista de categorías
    categories = []
    icon_map = {
        "Cuchillos": "content_cut",
        "Equipos de Corte": "precision_manufacturing",
        "Automatización": "smart_toy",
        "Accesorios": "handyman",
        "Afiladores": "build"
    }
    
    for cat_es, cat_en in categories_set:
        categories.append({
            "file": f"{slugify(cat_en)}.json",
            "name_es": cat_es,
            "name_en": cat_en,
            "icon": icon_map.get(cat_es, "inventory_2")
        })
    
    return {
        "slug": "fabretall",
        "name": "Fabretall",
        "description": "Especialistas en cuchillería industrial y equipos de corte para la industria alimentaria",
        "description_en": "Specialists in industrial cutlery and cutting equipment for the food industry",
        "country": "España",
        "country_en": "Spain",
        "website": "https://fabretall.com",
        "icon": "content_cut",
        "color": "#d32f2f",
        "products": products,
        "categories": categories
    }

def scrape_bobet():
    """Scraper para Bobet - Accesorios para cuchillos"""
    print("\n" + "="*50)
    print("SCRAPING: BOBET")
    print("="*50)
    
    base_urls = [
        ("https://bobet-materiel.com/shop/ranges/sub-category-505001-knife-scabbards", "Fundas para Cuchillos", "Knife Scabbards"),
        ("https://bobet-materiel.com/shop/ranges/category-605-screwing", "Tornillería", "Screwing"),
        ("https://bobet-materiel.com/shop/ranges/sub-category-505002-knife-holders", "Portacuchillos", "Knife Holders"),
    ]
    
    products = []
    categories = []
    
    for base_url, cat_es, cat_en in base_urls:
        try:
            print(f"\nProcesando categoría: {cat_es}")
            response = requests.get(base_url, headers=HEADERS, timeout=10)
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Buscar productos en la página
            product_cards = soup.find_all('div', class_='product-card') or soup.find_all('article', class_='product')
            
            if not product_cards:
                # Intentar otro selector
                product_cards = soup.find_all('div', class_='product')
            
            for card in product_cards[:5]:  # Limitar a 5 por categoría
                try:
                    title_tag = card.find('h2') or card.find('h3') or card.find('a', class_='product-name')
                    title = title_tag.text.strip() if title_tag else "Producto Bobet"
                    
                    img_tag = card.find('img')
                    img_url = img_tag.get('src') if img_tag else None
                    if img_url and not img_url.startswith('http'):
                        img_url = urljoin(base_url, img_url)
                    
                    img_filename = f"bobet-{slugify(title)}.jpg"
                    if img_url:
                        download_image(img_url, f"{IMAGES_PATH}/{img_filename}")
                    
                    products.append({
                        "provider": "bobet",
                        "category": cat_en,
                        "category_es": cat_es,
                        "item_name": title,
                        "item_name_es": title,
                        "image_path": f"images/{img_filename}",
                        "image_url": img_url or ""
                    })
                except Exception as e:
                    print(f"  Error procesando producto: {e}")
            
            categories.append({
                "file": f"{slugify(cat_en)}.json",
                "name_es": cat_es,
                "name_en": cat_en,
                "icon": "handyman"
            })
            
            time.sleep(1)
            
        except Exception as e:
            print(f"  Error: {e}")
    
    # Si no se encontraron productos, crear datos básicos
    if not products:
        products = [
            {"provider": "bobet", "category": "Knife Scabbards", "category_es": "Fundas para Cuchillos", "item_name": "Knife Scabbard Professional", "item_name_es": "Funda para Cuchillo Profesional", "image_path": "", "image_url": ""},
            {"provider": "bobet", "category": "Knife Holders", "category_es": "Portacuchillos", "item_name": "Magnetic Knife Holder", "item_name_es": "Portacuchillos Magnético", "image_path": "", "image_url": ""},
        ]
    
    return {
        "slug": "bobet",
        "name": "Bobet",
        "description": "Fabricante francés de accesorios profesionales para cuchillería industrial",
        "description_en": "French manufacturer of professional accessories for industrial cutlery",
        "country": "Francia",
        "country_en": "France",
        "website": "https://bobet-materiel.com",
        "icon": "handyman",
        "color": "#6a1b9a",
        "products": products,
        "categories": categories if categories else [
            {"file": "knife-scabbards.json", "name_es": "Fundas para Cuchillos", "name_en": "Knife Scabbards", "icon": "shield"},
            {"file": "knife-holders.json", "name_es": "Portacuchillos", "name_en": "Knife Holders", "icon": "grid_view"}
        ]
    }

def scrape_panacheind():
    """Scraper para PanacheIND - Acero inoxidable"""
    print("\n" + "="*50)
    print("SCRAPING: PANACHEIND")
    print("="*50)
    
    # PanacheIND tiene una estructura diferente, creamos datos basados en la info proporcionada
    products = [
        {
            "provider": "panacheind",
            "category": "Stainless Steel Fasteners",
            "category_es": "Sujetadores de Acero Inoxidable",
            "item_name": "Stainless Steel Fasteners",
            "item_name_es": "Sujetadores de Acero Inoxidable",
            "image_path": "",
            "image_url": ""
        },
        {
            "provider": "panacheind",
            "category": "Round Bars & Wires",
            "category_es": "Barras y Alambres",
            "item_name": "Stainless Steel Round Bars & Wires",
            "item_name_es": "Barras Redondas y Alambres de Acero Inoxidable",
            "image_path": "",
            "image_url": ""
        },
        {
            "provider": "panacheind",
            "category": "Capillary Tubes",
            "category_es": "Tubos Capilares",
            "item_name": "Stainless Steel Capillary Tubes",
            "item_name_es": "Tubos Capilares de Acero Inoxidable",
            "image_path": "",
            "image_url": ""
        }
    ]
    
    return {
        "slug": "panacheind",
        "name": "PanacheIND",
        "description": "Proveedor y exportador de productos de acero inoxidable de alta calidad",
        "description_en": "Supplier and exporter of high-quality stainless steel products",
        "country": "India",
        "country_en": "India",
        "website": "https://www.panacheind.com",
        "icon": "hardware",
        "color": "#455a64",
        "products": products,
        "categories": [
            {"file": "fasteners.json", "name_es": "Sujetadores", "name_en": "Fasteners", "icon": "settings"},
            {"file": "bars-wires.json", "name_es": "Barras y Alambres", "name_en": "Round Bars & Wires", "icon": "linear_scale"},
            {"file": "capillary-tubes.json", "name_es": "Tubos Capilares", "name_en": "Capillary Tubes", "icon": "radio_button_unchecked"}
        ]
    }

def save_supplier_data(supplier_data):
    """Guarda los datos del proveedor en la estructura correcta"""
    slug = supplier_data["slug"]
    
    # Crear carpeta del proveedor
    supplier_path = f"{CATALOG_PATH}/{slug}"
    os.makedirs(supplier_path, exist_ok=True)
    
    # Crear __metadata__.json del proveedor
    metadata = {
        "name": supplier_data["name"],
        "slug": slug,
        "description": supplier_data["description"],
        "description_en": supplier_data["description_en"],
        "icon": supplier_data["icon"],
        "color": supplier_data["color"],
        "categories": supplier_data["categories"]
    }
    
    with open(f"{supplier_path}/__metadata__.json", 'w', encoding='utf-8') as f:
        json.dump(metadata, f, ensure_ascii=False, indent=2)
    print(f"\n✓ Guardado: {supplier_path}/__metadata__.json")
    
    # Agrupar productos por categoría y guardar
    products_by_cat = {}
    for product in supplier_data["products"]:
        cat_file = slugify(product["category"]) + ".json"
        if cat_file not in products_by_cat:
            products_by_cat[cat_file] = []
        products_by_cat[cat_file].append(product)
    
    for cat_file, products in products_by_cat.items():
        with open(f"{supplier_path}/{cat_file}", 'w', encoding='utf-8') as f:
            json.dump(products, f, ensure_ascii=False, indent=2)
        print(f"✓ Guardado: {supplier_path}/{cat_file}")
    
    return {
        "name": supplier_data["name"],
        "description": supplier_data["description"],
        "description_en": supplier_data["description_en"],
        "country": supplier_data["country"],
        "country_en": supplier_data["country_en"],
        "website": supplier_data["website"],
        "icon": supplier_data["icon"],
        "color": supplier_data["color"],
        "logo": f"assets/images/suppliers/{slug}-logo.png",
        "products_count": len(supplier_data["products"]),
        "files": list(products_by_cat.keys()),
        "available_categories": {
            "eng": [cat["name_en"] for cat in supplier_data["categories"]],
            "esp": [cat["name_es"] for cat in supplier_data["categories"]]
        }
    }

def update_main_metadata(suppliers_info):
    """Actualiza el archivo principal __metadata__.json"""
    main_metadata_path = f"{CATALOG_PATH}/__metadata__.json"
    
    # Cargar metadata existente
    try:
        with open(main_metadata_path, 'r', encoding='utf-8') as f:
            main_metadata = json.load(f)
    except:
        main_metadata = {"suppliers": {}}
    
    # Agregar nuevos proveedores
    for slug, info in suppliers_info.items():
        main_metadata["suppliers"][slug] = info
    
    # Guardar
    with open(main_metadata_path, 'w', encoding='utf-8') as f:
        json.dump(main_metadata, f, ensure_ascii=False, indent=2)
    
    print(f"\n✓ Actualizado: {main_metadata_path}")

def main():
    print("\n" + "="*60)
    print("    SCRAPER DE PROVEEDORES - METPLASTECH")
    print("="*60)
    
    # Crear carpetas necesarias
    os.makedirs(CATALOG_PATH, exist_ok=True)
    os.makedirs(IMAGES_PATH, exist_ok=True)
    os.makedirs(SUPPLIERS_LOGOS_PATH, exist_ok=True)
    
    suppliers_info = {}
    
    # Scrapear cada proveedor
    scrapers = [
        ("steen", scrape_steen),
        ("fabretall", scrape_fabretall),
        ("bobet", scrape_bobet),
        ("panacheind", scrape_panacheind),
    ]
    
    for slug, scraper_func in scrapers:
        try:
            supplier_data = scraper_func()
            info = save_supplier_data(supplier_data)
            suppliers_info[slug] = info
        except Exception as e:
            print(f"\n✗ Error procesando {slug}: {e}")
    
    # Actualizar metadata principal
    update_main_metadata(suppliers_info)
    
    print("\n" + "="*60)
    print("    ¡SCRAPING COMPLETADO!")
    print("="*60)
    print(f"\nProveedores procesados: {len(suppliers_info)}")
    print("\nRecuerda agregar los logos de cada proveedor en:")
    print(f"  {SUPPLIERS_LOGOS_PATH}/")
    for slug in suppliers_info.keys():
        print(f"    - {slug}-logo.png")

if __name__ == "__main__":
    main()

