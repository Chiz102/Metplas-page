# Metplastech Technologies - Sitio Web

Sitio web corporativo de **Metplastech Technologies SPA** construido con **Angular 17**.

![Angular](https://img.shields.io/badge/Angular-17-red)
![Node](https://img.shields.io/badge/Node.js-20-green)
![Deploy](https://img.shields.io/badge/Deploy-AWS%20%7C%20GitHub%20Pages-blue)

## Características

- **Angular 17 Standalone**: Componentes standalone sin módulos NgModule
- **Catálogo estático JSON**: Proveedores y productos cargados desde `src/assets/catalog/`
- **Multiidioma**: Soporte español/inglés con `@ngx-translate`
- **Diseño responsivo**: Adaptable a todos los dispositivos
- **Paleta de marca**: Verde `#4FAD47`, Azul `#2667A9`, Azul oscuro `#204C81`
- **Deploy dual**: AWS (producción) y GitHub Pages (preview)

## Estructura del proyecto

```
Metplas-page/
├── src/
│   ├── app/
│   │   ├── components/         # Header, footer, carousel
│   │   ├── core/               # Servicios y modelos
│   │   └── pages/              # Home, catálogo, contacto, nosotros
│   ├── assets/
│   │   ├── catalog/            # JSONs de proveedores y productos
│   │   ├── i18n/               # Traducciones (es.json, en.json)
│   │   └── images/             # Logos, productos, proveedores
│   ├── styles.scss             # Estilos globales
│   └── index.html
├── .github/workflows/
│   ├── aws.yml                 # Deploy automático a producción (push a main)
│   └── deploy-gh-pages.yml     # Deploy a GitHub Pages (manual o push a main)
├── angular.json
└── package.json
```

## Requisitos

- **Node.js** 20+
- **npm** 9+

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm start
```

La app estará disponible en `http://localhost:4200`

## Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `npm start` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run build:ghpages` | Build para GitHub Pages (base-href configurado) |
| `npm run deploy` | Deploy manual a GitHub Pages |

## Paleta de colores

| Variable | Valor | Uso |
|----------|-------|-----|
| Verde | `#4FAD47` | Acentos, badges, CTAs |
| Azul | `#2667A9` | Links, hover states |
| Azul oscuro | `#204C81` | Fondos oscuros, headers |
| Azul claro | `#D5E9F9` | Fondos suaves, bordes |

## Catálogo de proveedores

Los datos del catálogo se gestionan en `src/assets/catalog/`:
- `__metadata__.json` — lista de proveedores
- `[proveedor]/__metadata__.json` — productos de cada proveedor

Para agregar un proveedor: crear su carpeta con `__metadata__.json` y agregar la entrada en el `__metadata__.json` raíz.

## Deploy

### Producción (AWS)
Se dispara automáticamente con cada push a `main` mediante el workflow `aws.yml`.

### GitHub Pages (preview)
Se puede disparar manualmente desde **GitHub Actions > Deploy to GitHub Pages > Run workflow**, seleccionando cualquier rama — sin afectar el deploy de producción.

## Contacto

**Metplastech Technologies SPA**
- Curicó, Región del Maule, Chile
- +569 9615 4315
- contacto@metplastech.cl
- [metplastech.cl](https://metplastech.cl)
