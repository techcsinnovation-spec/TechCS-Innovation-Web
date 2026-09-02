# TechCS-Innovation-Web
Página web oficial de TechCS Innovation, emprendimiento enfocado en soluciones tecnológicas y desarrollo de software.
# TechC&S Innovation — Landing Page

Sitio de una sola página (HTML + CSS + JS puro, sin frameworks ni build).

## Estructura
```
index.html
css/styles.css
js/main.js
assets/        (para imágenes o logo cuando los tengan)
```

## Ver en local
No requiere instalación. Basta con abrir `index.html` en el navegador,
o levantar un servidor simple para probar rutas relativas:

```powershell
cd techcs-web
python -m http.server 8000
```

Luego abre http://localhost:8000 en el navegador.

## Publicar en GitHub Pages
1. Sube esta carpeta como contenido raíz del repositorio (o de una rama `gh-pages`).
2. En GitHub: **Settings → Pages → Branch** → selecciona la rama y la carpeta `/ (root)`.
3. GitHub te da una URL tipo `https://<usuario-u-organizacion>.github.io/<repo>/`.
4. Cuando el dominio `techcsinnovation.com.co` esté activo, en **Settings → Pages → Custom domain**
   se agrega el dominio y se configura un registro `CNAME` en el proveedor de DNS apuntando a
   `<usuario>.github.io`.

## Qué falta / se puede ajustar fácilmente
- **Correo de contacto**: hoy dice `techcsinnovation@gmail.com` (placeholder) en dos lugares del
  `index.html` (botón "Escríbenos por correo" y el texto de contacto).
- **Enlace de Facebook**: el botón "Síguenos en Facebook" apunta a `https://facebook.com` genérico;
  hay que reemplazarlo por el link real de la página.
- **Logo**: por ahora el logo es texto ("C&S" en un cuadro). Si luego diseñan un isotipo, se
  reemplaza en el `<a class="brand">` del header.