# A bunch of React Components

## Including in your project

```
npm install @landrik/ui
```

```
@import { Button } from '@landrik/ui'
```

## Running Storybook

```
npm run storybook
```

## Adding new Components

Add new components by using the `component:generate` npm task. It will prompt you for a name for the Component.
Please follow the Standard ReactNamingConventions, and name the component the singular form.

```
Good: TextInput Button CheckBox

Bad: textInput text-input text input Buttons
```

A new directory will be created in the `./src/components` directory with the following files:

```
.
├── src
|   ├── Component
|   |   ├── Component.tsx
|   |   ├── Component.scss
|   |   ├── Component.story.ts
|   |   ├── Component.test.tsx
|   |   ├── README.md
|   |   ├── index.ts
```
