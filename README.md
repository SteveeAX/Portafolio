# Portafolio — Steveen Quiroz

Portafolio personal desarrollado con React y diseño bento grid. Incluye animaciones fluidas, soporte bilingüe (ES/EN) y modo oscuro/claro.

🌐 **[steveenquiroz.vercel.app](https://steveenquiroz.vercel.app)**

## Stack tecnológico

- **React 19** + **TypeScript**
- **Vite** — servidor de desarrollo y build
- **Framer Motion** — animaciones
- **Tailwind CSS** — estilos
- **Lucide Icons** — íconos

## Comandos

```bash
npm install       # Instalar dependencias
npm run dev       # Servidor de desarrollo en localhost:3000
npm run build     # Build de producción
npm run preview   # Previsualizar el build localmente
npm run lint      # Verificación de tipos TypeScript
```

## Personalización

Los datos personales están centralizados en la carpeta `config/`:

| Archivo | Contenido |
|---|---|
| `config/personal.ts` | Nombre, email, GitHub, LinkedIn, ubicación |
| `config/experience.ts` | Experiencia laboral |
| `config/education.ts` | Título universitario y certificaciones |
| `config/projects.ts` | Proyectos (bilingüe) |
| `config/layout.ts` | Orden y tamaño de las cards en la grilla |
| `public/Profile.png` | Foto de perfil |

Para agregar traducciones, editar ambos objetos `en` y `es` en `i18n/translations.ts`.

## Despliegue

Desplegado en **Vercel** con auto-deploy en cada push a `main`.

```bash
git push origin main  # Vercel despliega automáticamente
```
