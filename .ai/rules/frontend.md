# Frontend

- Inertia + React with TypeScript. Pages live in `resources/js/pages`.
- Styling is Tailwind v4 utilities only. Theme tokens live in `resources/css/app.css`. Don't add separate CSS files for components.
- Reuse existing components in `resources/js/components` before suggesting a new one.
- Link to backend routes through Wayfinder (`@/actions`, `@/routes`), never hardcoded URLs.
- This is a single page: suggest sections within one page, not new routes, unless asked.
