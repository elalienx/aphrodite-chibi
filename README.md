# Aphrodite Chibi

## 🚀 Project Structure

Inside of the Aphrodite Chibi project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── components/
│   └── doc-components/
│   └── forms/
│   └── helpers/
│   └── layout/
│   └── pages/index.astro 🏁 Entry point
│   └── styles/
└── package.json

```

### Main folders

1. **📦 Components:** The UI components of Aphrodite Chibi. Each folder contains a React TypeScript and at least one CSS file. If the folder contains more than one CSS file, the name explains how the component stlyes are divided into layout, state, design, and unique case scenarios.
1. **📖 Docs Components:** The UI components of the documentation page. These are not neccesary to builld Lendo's website, only for reading the Aphrodite Chibi instruction manual. Contains a mix of React and Astro files.
1. **📋 Forms:** Special React components which simulate a specic Lendo application form. Use to test Aphrodite Chibi integrations with schema validation, form handlers, state managmeent, and tracking.
1. **📐 Layouts:** Special Astro components use to build other pages. Case in point a Document template for each page explaining an Aphrodite Chibi component.
1. **📑 Pages:** Astro pages for accesing the documenation and examples of the form in action. As mentioned, `index.astro` is the entry point. 🏁

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
