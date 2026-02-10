# A bunch of React Components

## Including in your project

```
npm install @landrik/ui
```

```
@import { Button } from '@landrik/ui'

```


## Quick Start

```tsx
import { ThemeProvider, Button, TextField } from '@landrik/ui';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Click me</Button>
      <TextField label="Email" type="email" />
    </ThemeProvider>
  );
}
```

## Running Storybook

```
npm run storybook
```

## Documentation

Visit our [Storybook documentation](https://landrik.github.io/landrik-ui) for live examples.

## Adding new Components

Add new components by using the `create:component` npm task. It will prompt you for a name for the Component.
Please follow the Standard ReactNamingConventions, and name the component the singular form.

```
Good: TextField Button CheckBox

Bad: TextField text-input text input Buttons
```

A new directory will be created in the `./src/components` directory with the following files:

```
.
├── src
|   ├── Component
|   |   ├── Component.tsx
|   |   ├── Component.styled.tsx
|   |   ├── Component.stories.tsx
|   |   ├── Component.test.ts
|   |   ├── Component.types.ts
|   |   ├── index.ts
```
## License

MIT
