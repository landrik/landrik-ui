#!/bin/bash

// echo  "Hi. What is the name of the component you want to remove?"  

// read COMPONENT_NAME

// echo Removing component: $COMPONENT_NAME

// rm -rf ./src/components/$COMPONENT_NAME
// sed -i '' '/$COMPONENT_NAME/d' ./src/index.ts


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


/*# Remove Component directory
  # ================================================================================================ */
fs.removeSync(componentDir, { recursive: true });

console.log(`✓ Component '${capitalizedName}' has been removed at ${componentDir}`);