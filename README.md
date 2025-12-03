# Metplastech Technologies - Web Application

Una aplicación web moderna para **Metplastech Technologies SPA** construida con **Django** (backend) y **Angular** (frontend).

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Django](https://img.shields.io/badge/Django-4.2-green)
![Angular](https://img.shields.io/badge/Angular-17-red)

## 🚀 Características

- **Backend Django REST API**: API robusta con Django REST Framework
- **Frontend Angular 17**: Interfaz moderna con componentes standalone
- **Diseño Responsivo**: Adaptable a todos los dispositivos
- **Tema Oscuro Industrial**: Estética moderna con acentos cyan
- **Catálogo de Productos**: Sistema completo de categorías y subcategorías
- **Formulario de Contacto**: Integrado con la API
- **WhatsApp Integration**: Botón flotante para contacto directo

## 📁 Estructura del Proyecto

```
Metplas-page/
├── backend/                 # Django Backend
│   ├── metplas_api/        # Configuración principal
│   ├── catalog/            # App del catálogo
│   ├── manage.py
│   └── requirements.txt
├── frontend/               # Angular Frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/     # Componentes compartidos
│   │   │   ├── core/           # Servicios y modelos
│   │   │   └── pages/          # Páginas principales
│   │   ├── styles.scss         # Estilos globales
│   │   └── index.html
│   ├── angular.json
│   └── package.json
└── README.md
```

## ⚙️ Requisitos

- **Python** 3.10+
- **Node.js** 18+
- **npm** 9+

## 🛠️ Instalación

### Backend (Django)

```bash
# 1. Navegar al directorio backend
cd backend

# 2. Crear entorno virtual
python -m venv venv

# 3. Activar entorno virtual
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# 4. Instalar dependencias
pip install -r requirements.txt

# 5. Ejecutar migraciones
python manage.py migrate

# 6. Cargar datos iniciales
python manage.py load_initial_data

# 7. Crear superusuario (opcional, para admin)
python manage.py createsuperuser

# 8. Iniciar servidor de desarrollo
python manage.py runserver
```

El backend estará disponible en: `http://localhost:8000`
Admin Django: `http://localhost:8000/admin`

### Frontend (Angular)

```bash
# 1. Navegar al directorio frontend
cd frontend

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm start
```

El frontend estará disponible en: `http://localhost:4200`

## 📚 API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/categories/` | Lista todas las categorías |
| GET | `/api/categories/{slug}/` | Detalle de una categoría |
| GET | `/api/subcategories/` | Lista subcategorías |
| GET | `/api/products/` | Lista productos |
| GET | `/api/products/featured/` | Productos destacados |
| POST | `/api/contact/` | Enviar mensaje de contacto |
| GET | `/api/company/` | Información de la empresa |

## 🎨 Personalización

### Colores (CSS Variables)

Los colores principales se pueden modificar en `frontend/src/styles.scss`:

```scss
:root {
  --color-primary: #0a1628;
  --color-accent: #00d4ff;
  --color-accent-secondary: #00ff9d;
  --color-cta: #ff6b35;
}
```

### Información de Empresa

Puedes modificar la información de la empresa desde el **Admin de Django**:
1. Accede a `http://localhost:8000/admin`
2. Ve a **Catalog > Company Info**
3. Edita los datos según necesites

## 🚀 Despliegue

### Backend (Producción)

```bash
# Configurar variables de entorno
export DJANGO_SECRET_KEY='tu-clave-secreta-segura'
export DEBUG='False'

# Recolectar archivos estáticos
python manage.py collectstatic

# Usar Gunicorn
gunicorn metplas_api.wsgi:application
```

### Frontend (Producción)

```bash
# Build de producción
npm run build

# Los archivos estarán en dist/metplas-frontend/
```

## 📞 Contacto

**Metplastech Technologies SPA**
- 📍 Curicó, Región del Maule, Chile
- 📱 +569 9615 4315
- 📧 contacto@metplastech.cl
- 🌐 [metplastech.cl](https://metplastech.cl)

## 📄 Licencia

Este proyecto fue desarrollado para Metplastech Technologies SPA.

