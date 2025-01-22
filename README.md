# `datavis.cs.columbia.edu` website

This repository contains an [Astro](https://astro.build)-based static site generator that will publish to Github Pages when new commits are pushed.

## 🚀 Project Structure

Inside of the Astro project, you'll see the following folders and files:

```text
/
├── archive/
│   └── old-jekyll-sites
├── public/
│   ├── archived-course-1
│   ├── archived-course-2
│   └── static-file.xyz
├── src/
│   ├── components
│   |   └── PageElement.astro
│   └── pages/
│       ├── course-3
│       |   └── index.astro
│       └── course-4
│           └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
