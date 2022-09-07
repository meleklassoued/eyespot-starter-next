<h1 align="center">
 Malik/ Eyespot Starter Next
</h1>

Next starter reflecting Eyespot Agency standards and conventions. Powered by [`hygen-emiketic-react`](https://www.npmjs.com/package/hygen-emiketic-react) for file templating and scaffolding.

# Essential rules

- Code must be linted and formatted
- Do not leave irrelevant trailing comments or commented code blocks
- Do not leave unused files or assets
- No inline style (except for less common instances when style linked to runtime logic)
- Image sizes must be web web friendly (max 300kb unless rendered in a special visio mode)
- Make sure you test your output on actual mobile devices and not just on in-browser phone screen emulators. To test your code on an actual device prior to CI/CD, use a tunnel like `ngrok`. Signup, install then `ngrok http -host-header="localhost:8000" 8000`
- A website is considered incomplete as long as it's not W3C compliant (or almost compliant). Use the W3C validator.
- A website isn't considered efficient until at least Lighthouse says so (perf, SEO, image sizes...etc.).

# Setup

## Prerequisites

- Install `hygen` globally
- Make sure you have an up-to-date NodeJS version (an LTS)
- Prefer Unix-based environments to Windows
- Preferably VSCode with recommended extensions supplied in `.vscode/extensions`

## Website setup

Use the Next CLI to create a new site, specifying the Eyespot starter

Start website in developer mode

```shell
cd website-repo-slug-name/
yarn dev
```

**Important note** When adding dependencies or updating them, use `yarn` and not `npm`

# Generating conventional code templates

With `hygen` installed and the website project dependencies installed, navigate to the website working directory and type

## Adding a page

`hygen next page SomePage`

This will add the following files:

- `pages/some-page`: Gatsby standard page
- `page-styles/SomePage.module.scss`: A `.module.scss` style file for the page with root selector defined as `some-page`

## Adding a component

### Page component

`hygen next component SomeComponent --page SomePage`

This will create a folder for a component associated with the page `SomePage` under `/page-components/SomeComponent`. The folder will contain the following files:

- `SomeComponent.js`: Standard component file
- `SomeComponent.module.scss`: Standard `.module.scss` style file for the component imported with the component implementation file

### Shared component

`hygen next component SomeWidget`

This will create a folder for a shared component (reusable among pages and other components). The `SomeWidget` folder will contain:

- `SomeWidget.js`: Standard component file
- `SomeWidget.module.scss`: Standard `.module.scss` style file for the component imported with the component implementation file

# Folder structure

    .
    ├── src
    ├────── pages => Contains Gatsby pages named with this pattern page-name.js
    ├────── page-styles => Contains style files in .module.scss for Gatsby pages named with the corresponding page name
    with this pattern PageName.module.scss
    ├────── page-stories => Contains Storybook stories in .mdx for Gatsby pages named with the corresponding page name with this pattern PageName.stories.mdx
    ├────── page-components => Contains components that are specific to a page named with the corresponding page name with this pattern PageName/ComponentName/ComponentName.js|.module.scss|stories.mdx
    ├────── shared => Shared components, layouts (feel free to add your own extra layouts), helpers and global style
    ├──────────── styles
    ├─────────────────── theme.scsss => Theme global style which can use variables (see file below) as well
    ├─────────────────── _variables.module.scss => All shared colors, dimensions, font features and visual effects should go here
    ├─────────────────── global.scsss => Other globals than theme globals. Minor but useful.
    ├─────────────────── index.scc => **WARNING** Only touch to use/enable a theme over another
    ├─────────────────── theme-gatsby-default.scsss => Leave as is (for debugging purposes)
    ├──────────── Helpers => Add any redundant logic, driver logic, decoupled code...etc. here
    .
    .
    .
    ├── package.json => WARNING: You must inform project manager on the project group chat when installing extra-dependencies or updating ones
    ├
    .
    .
    .
    ├── gatsby-config.js => OK. Use for Gatsby configurations
    ├── gatsby-browser.js => OK. Use for Gatsby configurations
    ├── gatsby-ssr.js => OK. Use for Gatsby configurations only for specific projects with SSR
    ├──
    ├── ... several config files => DO NOT ALTER
    └── ...

# Linting and formatting

- Uses ESLint and Prettier working in pair together
- Linting and formatting are enforced (won't compile unless addressed)
- Formatting/Linting is automatically processed on saving files. If linting errors remain unresolved, commit won't go through
- In fact, linting and formatting tasks are also
  installed as a pre-commit hook through Husky

# Committing code

- Follows the [_Conventional Committing_](https://www.conventionalcommits.org/en/v1.0.0/) standard

- Feature example: `git commit -m "feat: Closes ISS-1. Ability to login with Apple"`
- Patch example: `git commit -m "fix: Closes ISS-2 and corrects scrolling bug"`
- Major/Breaking change example: `git commit -m "BREAKING CHANGE: Updated website version"`
- Combines feature and breaking change:
- Major/Breaking change example:

  `git commit -m "feat: Closes ISS-1. Ability to login with Apple BREAKING CHANGE: Updated Gatsby version"`

- Commits not impacting versioning:

  - Regular / casual example: `git commit -m "chore: ISS-4 Installed dependencies"`
  - Refactoring example: `git commit -m "refactoring: Refactored component"`
  - Other commit types: _build:, chore:, ci:, docs:, style:, refactor:, perf:, test_

- The standard is linted and Husky will prevent commits from going through if it's not compliant
- Project managers/owners can release satisfying updates and issue version bumps thanks to [standard-version](https://github.com/conventional-changelog/standard-version) by running `yarn release`. This will generate:
- Appropriate tags based on the conventional commit history
- An aggregated `CHANGELOG.md` file update.
