# Consultorías Administrativas Landing Demo

Demo en Next.js, React y TypeScript para reorganizar la información de Consultorías Administrativas en una landing más clara, orgánica y preparada para SEO/LLM.

## Comandos

```bash
npm install
npm run dev
npm run build
```

## Demo público

El proyecto está preparado para exportación estática con Next.js y GitHub Pages.
La versión pública se sirve desde la rama `gh-pages` bajo:

```text
https://riascos96.github.io/consultoriasadmi-demo/
```

Para actualizar el demo público:

```bash
NEXT_PUBLIC_BASE_PATH=/consultoriasadmi-demo \
NEXT_PUBLIC_SITE_URL=https://riascos96.github.io/consultoriasadmi-demo \
npm run build
```

Luego publica el contenido de `out/` en la rama `gh-pages`.

Para un dominio o subdominio propio, configura el `CNAME` correspondiente en
GitHub Pages/DNS y reconstruye con el `NEXT_PUBLIC_SITE_URL` definitivo.

## Enfoque

- Paleta basada en el sitio actual: `#44d2f6`, `#102147`, `#f7fafb`.
- Assets reutilizados desde `https://www.consultoriasadmi.com/`.
- Metadata SEO, Open Graph y JSON-LD con servicios, contacto, ubicación y perfiles sociales.
- Animaciones con GSAP respetando `prefers-reduced-motion`.
