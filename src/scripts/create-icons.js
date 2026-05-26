import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

const dir = path.resolve(__dirname, './src/assets/svgs');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg'));

const imports = files
  .map(f => {
    const name = path.basename(f, '.svg');
    const word = name.replace(/\b\w/g, char => char.toUpperCase());
    const pascal = word.replace(/-/g,'');
    return `import ${pascal} from './${f}';`;
  })
  .join(`\n`);

const map = `\n\n\n export const icons = {\n ${files
  .map(f=>{
    const name = path.basename(f, '.svg');
    const word = name.replace(/\b\w/g, char => char.toUpperCase());
    const pascal = word.replace(/-/g,'');
    return ` '${name}': ${pascal}, `; 
  })
  .join('\n')} \n} as const;\n\n export type IconName = keyof typeof icons; \n`;
  
fs.writeFileSync(path.join(dir, 'index.ts'), imports + map);

console.log(`Generated ${files.length} icons.`);