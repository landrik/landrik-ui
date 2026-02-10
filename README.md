# A bunch of React Components

A library of React components and patterns for Landrik Design System

## Including in your project

```bash
npm install @landrik/ui

```

```bash
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

```bash
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
|   |   ├── Component.styled.ts
|   |   ├── Component.stories.tsx
|   |   ├── Component.test.ts
|   |   ├── Component.types.ts
|   |   ├── index.ts
```
## License

## Contributing

We welcome contributions! Please see our email us for details on contributing for:

- Setting up your development environment
- Creating new components
- Testing and code style
- Submitting pull requests

For advanced topics like testing in external applications and publishing, see our [Developer Guide](./DEVELOPER.md).

## License

The source files in this repository are made available under the terms of the MIT License.

