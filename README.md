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
En GitHub Actions se publica bajo:

```text
https://riascos96.github.io/consultoriasadmi-demo/
```

Para un dominio o subdominio propio, cambia `NEXT_PUBLIC_BASE_PATH` y
`NEXT_PUBLIC_SITE_URL` en `.github/workflows/pages.yml` y configura el `CNAME`
correspondiente en GitHub Pages/DNS.

## Enfoque

- Paleta basada en el sitio actual: `#44d2f6`, `#102147`, `#f7fafb`.
- Assets reutilizados desde `https://www.consultoriasadmi.com/`.
- Metadata SEO, Open Graph y JSON-LD con servicios, contacto, ubicación y perfiles sociales.
- Animaciones con GSAP respetando `prefers-reduced-motion`.
