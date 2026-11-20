import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import image from '@rollup/plugin-image';
import url from '@rollup/plugin-url';
import { visualizer } from 'rollup-plugin-visualizer';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json' with { type: 'json' };

const peerDeps = Object.keys(pkg.peerDependencies || {});
const isExternal = (id) =>
  peerDeps.some((dep) => id === dep || id.startsWith(`${dep}/`));

export default [
  {
    input: pkg.source,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist/types',
        exclude: [
          '**/*.test.tsx',
          '**/*.test.ts',
          '**/*.stories.tsx',
          '**/test-utils.tsx',
        ],
      }),
      url({
        include: ['**/*.woff', '**/*.woff2', '**/*.ttf', '**/*.eot'],
        limit: Infinity,
        fileName: '[dirname][name][extname]',
      }),
      image(),
      ...(process.env.ANALYZE === 'true'
        ? [visualizer({ filename: 'dist/bundle-stats.html', open: true })]
        : []),
    ],
    external: isExternal,
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: pkg.types, format: 'esm' }],
    plugins: [
      dts({
        respectExternal: true,
        compilerOptions: {
          baseUrl: '.',
          paths: {
            '@/*': ['src/*'],
          },
          types: [], // Prevents rollup-plugin-dts from crawling @types/react & @types/prop-types
        },
      }),
    ],
    external: (id) =>
      id === 'react' ||
      id.startsWith('react/') ||
      id === 'react-dom' ||
      id.startsWith('react-dom/') ||
      id === 'styled-components' ||
      id.startsWith('styled-components/') ||
      /\.(css|less|scss|woff|woff2|ttf|eot|otf|svg|png|jpg|jpeg|gif|webp)$/.test(id),
  },
];
