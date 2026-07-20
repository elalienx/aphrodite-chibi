# Aphrodite Chibi

Aphrodite Chibi is a UI component library for building complex multi-step forms.

Our motto is... making Lendo more Kawaii <3

[Demo website](https://aphrodite-chibi.web.app) | [Storybook gallery](https://aphrodite-chibi-storybook.web.app)

## Syntax Overview

Aprhodite Chibi aims to be small, tiny, Chibi! It achieves it by making the user write the least amount of syntax needed.

```jsx
<InputField form={form} id={"name"}>
  <Label>Your full name</Label>
  <Input type="number" placeholder="18" />
</InputField>
```

This syntax is possible thanks to the [Slot pattern](https://en.wikipedia.org/wiki/Signals_and_slots):

1. The parent passes down `form` and `id` using an internal method named `extractComponent()`.
1. This allow the children to receive these props without "prop drilling".
1. The children can still normally access their props such as `type` and `placeholder` .

See more examples in the `forms/` section.

## Project Structure

```text
/ root/
├── playwright/
├── public/
├── skills/
├── snapshots/
├── src/
│   └── components/
│   └── forms/
│   └── helpers/
│   └── layouts/
│   └── pages/index.astro 🏁 Entry point
│   └── state/
│   └── styles/
└── package.json
```

Here is an explanation of the main folders:

1. **📦 Components:** The UI components of Aphrodite Chibi. Each folder contains a React TypeScript file, a Storybook file, and at least one CSS file. If the folder contains more than one CSS file, the name explains how the component styles are divided into layout, state, design, or any unique case scenarios.
1. **📋 Forms:** Split into `example` folders showing component behavior and `mvp` folders simulating Lendo product forms tailored to each team's conventions.
1. **🧑‍💻 Helpers:** Scripts designed to smooth the integration between Aphrodite Chibi UI with Formisch and Valibot.
1. **📑 Pages:** Astro pages for accessing examples of forms in action. As mentioned, `index.astro` is the entry point.

## Terminal commands

All commands are run from the root of the project:

| Command                | Action                                      |
| :--------------------- | :------------------------------------------ |
| `pnpm install`         | Installs dependencies                       |
| `pnpm dev`             | Starts local dev server at `localhost:4321` |
| `pnpm format`          | Format all files using Oxfmt formatter      |
| `pnpm lint`            | Lint all files using Oxlint linter          |
| `pnpm playwright --ui` | Open Playwright UI viewer to run tests      |
| `pnpm storybook`       | Open Storybook to visualize components      |
| `pnpm test`            | Run unit tests using Vitest                 |
