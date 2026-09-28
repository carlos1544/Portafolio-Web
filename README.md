# Portafolio web — Carlos Calle

Portafolio personal de Carlos Calle, estudiante de Ingeniería en Software. El sitio presenta su perfil, habilidades, proyectos destacados y medios de contacto en una interfaz adaptable a escritorio y dispositivos móviles.

## Contenido

- Presentación y sección «Sobre mí».
- Habilidades de frontend y herramientas.
- Proyectos destacados con filtros por tecnología.
- Design system con colores, tipografía, espaciado y componentes.
- Sección de contacto con validación básica del formulario.
- Navegación adaptable y selector de tema claro/oscuro; la preferencia de tema se conserva en el navegador.

> El formulario solo valida los datos y muestra una confirmación en el navegador. No envía mensajes a un servidor ni a un servicio de correo.

## Tecnologías

- **HTML5** para la estructura y el contenido.
- **CSS3** para los estilos, variables de diseño, tema oscuro y adaptación responsive.
- **JavaScript** sin frameworks para las interacciones del sitio.
- **Google Fonts:** Quicksand y Nunito Sans.

No se requiere instalar dependencias ni compilar el proyecto.

## Visualización

### Opción 1: abrir directamente

Abre `index.html` en un navegador moderno. La página funciona como un sitio estático.

### Opción 2: usar Visual Studio Code

1. Abre la carpeta del proyecto en Visual Studio Code.
2. Instala la extensión **Live Server**, si todavía no la tienes.
3. Haz clic derecho en `index.html` y selecciona **Open with Live Server**.

Live Server sirve la página localmente y recarga el navegador al guardar cambios. Se necesita conexión a Internet para cargar las fuentes de Google Fonts; sin ella se usarán fuentes alternativas del sistema.


## Estructura del proyecto

```text
Portafolio-Web-main/
├── index.html
├── style.css
├── custom.css
├── script.js
└── img/
    ├── Brazo-chatarra.png
    ├── codigo-fondo.jpg
    ├── mercado-virtual.png
    ├── viaje-entre-lineas.png
    ├── portfolio-desktop.png
    └── portfolio-mobile.png
```

## Personalización

- Actualiza el texto, los enlaces y las secciones en `index.html`.
- Modifica la paleta, tipografía y estilos en `custom.css` y `style.css`.
- Ajusta filtros y comportamientos interactivos en `script.js`.
- Sustituye o agrega recursos gráficos dentro de `img/` y actualiza sus rutas en el HTML.
