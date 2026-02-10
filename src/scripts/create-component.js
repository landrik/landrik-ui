const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];
const basePath = process.argv[3] || 'src/components';

if (!componentName) {
  console.error('Error: Component name required');
  console.log('Usage: node create-component.ts ComponentName [path]');
  process.exit(1);
}

// Capitalize first letter
const capitalizedName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
const componentDir = path.join(basePath, capitalizedName);


/*# Populate Component styled directory
  # ================================================================================================ */
fs.mkdirSync(componentDir, { recursive: true });


/*# Populate Component file
  # ================================================================================================ */

const componentContent = `import React, { FC } from 'react';
  import { Styled${capitalizedName} } from './${capitalizedName}.styled';
  import { ${capitalizedName}Props } from './${capitalizedName}.types';

  export const ${capitalizedName}:FC<${capitalizedName}Props> = (props) => {
    return (
      <Styled${capitalizedName}>
        ${capitalizedName} Component
      </Styled${capitalizedName}>
    );
  };

`;


/*# Populate Component styled file
  # ================================================================================================ */
const styledContent = `import styled, { css } from "styled-components";
import { ${capitalizedName}Props } from "./${capitalizedName}.types";

export const Styled${capitalizedName} = styled.div\`display: inline-flex;\`
`;

/*# Populate Component Type file
  # ================================================================================================ */

const typedContent = `import { HTMLAttributes, ReactNode } from 'react';
export type ${capitalizedName}Variant = 'primary' | 'secondary' | 'danger';

export interface ${capitalizedName}Props extends HTMLAttributes<HTMLElement>{
  children: ReactNode;
}`;


/*# Populate Component stories file
  # ================================================================================================ */
const storiesContent = `import React from "react";
import { ${capitalizedName} } from "./${capitalizedName}";
import type { Meta, StoryObj } from '@storybook/react';

const meta :Meta<typeof ${capitalizedName}> = {
  title: 'Components/${capitalizedName}',
  component: ${capitalizedName},
  parameters: {layout: 'centered'},
  tags: ['autodocs']

};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
}
`;


/*# Populate Component Jest file
  # ================================================================================================ */
const testedContent = `import React from "react";
import renderer from "react-test-renderer";
import ${capitalizedName} from "./${capitalizedName}.tsx";

it("renders using the default props", () => {
  const tree = renderer.create(<${capitalizedName} />).toJSON();
  expect(tree).toMatchSnapshot();
});
`;


/*# Populate Component index file
  # ================================================================================================ */
const indexContent = `export { ${capitalizedName} } from './${capitalizedName}';
export type { ${capitalizedName}Props } from "./${capitalizedName}.types"
`;

// Write files

fs.writeFileSync(path.join(componentDir, `${capitalizedName}.stories.tsx`), storiesContent);
fs.writeFileSync(path.join(componentDir, `${capitalizedName}.styled.ts`), styledContent);
fs.writeFileSync(path.join(componentDir, `${capitalizedName}.types.ts`), typedContent);
fs.writeFileSync(path.join(componentDir, `${capitalizedName}.test.ts`), testedContent);
fs.writeFileSync(path.join(componentDir, `${capitalizedName}.tsx`), componentContent);
fs.writeFileSync(path.join(componentDir, 'index.ts'), indexContent);

console.log(`✓ Component '${capitalizedName}' created at ${componentDir}`);
