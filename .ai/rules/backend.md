# Backend

- The backend serves the portfolio page through Inertia. Keep it minimal.
- Projects are hardcoded in the controller for now, but must match the shape of the future `projects` table (`title`, `slug`, `summary`, `description`, `tech`, `url`, `repo_url`, `image`, `sort_order`). Always pass a list, even for one project.
- Projects are planned to move to the database (model, migration, factory, seeder). Content is added through a seeder, not an admin UI.
- The owner may build their own admin panel later. Don't suggest or add Filament or another admin package.
- No auth for now, so no auth middleware, policies or user-specific logic. Don't reintroduce Fortify.
- Use named routes. Follow Laravel conventions for anything new.
- After changing PHP, `vendor/bin/pint --dirty --format agent` must pass.
