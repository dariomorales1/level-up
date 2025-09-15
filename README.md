# Level-Up Gamer
Sitio web de ecommerce (front-end) para venta de juegos y accesorios.
Está construido con HTML5, CSS3 (Bootstrap 5.3) y JavaScript vanilla.
Incluye páginas de autenticación, catálogo, detalle de producto, carrito y secciones informativas.
Los datos de productos se cargan desde utilidades en js/utils/.

## 🗂️ Estructura del Proyecto

```
Entrega-1/
├── assets/
├── css/
│   └── components/
├── js/
│   ├── components/
│   └── utils/
├── pages/
│   ├── auth/
│   ├── contacto/
│   └── crud/
└── index.html
└── catalogo.html
└── cuenta.html
└── producto.html
```


## 🧰 Stack Tecnológico
HTML5 + CSS3
Bootstrap 5.3 (CDN)
JavaScript vanilla para lógica de componentes
Font Awesome (CDN) para iconografía
LocalStorage para sesión y carrito

## 📄 Páginas
HTML raíz: index.html, nosotros.html, contacto.html
Páginas en /pages/:
Autenticación: login.html, register.html
Catálogo / CRUD: productos.html, detalle.html, crear.html, editar.html
Contacto: contacto.html

## 🧩 Componentes y Estilos
JS Components: scripts para header, footer, carrito, CRUD de productos.
JS Utils: carga de productos, validaciones y helpers.
CSS Components: estilos modulares para navbar, cards, formularios y secciones de la tienda.

## 🚀 Modos de Ejecución
Modo Local (desarrollo)
Clonar o descargar el proyecto.
Abrir la carpeta Entrega-1/ en un editor (VS Code recomendado).
Levantar un servidor local (por ejemplo, con la extensión Live Server) o abrir index.html directamente en el navegador.
Tener conexión a Internet para cargar los recursos de los CDN (Bootstrap y Font Awesome).
Este proyecto es totalmente estático: no tiene package.json ni proceso de build.

## ⚠️ Estado del Proyecto
✅ Front-end funcional (maquetación completa + JS de componentes).
🧩 Datos de ejemplo en /js/utils/ (no conectado a backend real).
🛒 Carrito, navegación, header/footer y CRUD de productos en versión maqueta.