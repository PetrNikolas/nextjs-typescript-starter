# Next.js TypeScript Starter

A React/Next.js/TypeScript starter project.

## Features

- React/Next.js
- TypeScript
- Style loaders (CSS, SCSS, LESS) with PostCSS (Autoprefixer, PostCSS Fixes) and opt-in CSS modules
- Image loaders (SVG, etc)
- Next SEO
- Jest + Enzyme
- ESLint
- Husky

## Getting started

### Installation

- `yarn install`

### Running in development

- `yarn dev`

### Running in production

- `yarn build`
- `yarn start`

### :rocket: Test

```bash
yarn test # test
yarn test:watch
yarn test:coverage # report coverage
```

### Build static HTML

```bash
yarn
yarn build # create .next directory
yarn export # create .out directory
```

## Configuration

Set SEO & analytics variables

> src/constants/env.ts

```typescript
// for meta tag <og & twitter>
export const SITE_NAME = ''
export const SITE_TITLE = ''
export const SITE_DESCRIPTION = ''
export const SITE_IMAGE = ''
```
