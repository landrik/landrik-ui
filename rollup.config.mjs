// import commonjs from '@rollup/plugin-commonjs';
// import resolve from '@rollup/plugin-node-resolve';
// import typescript from '@rollup/plugin-typescript';
// import dts from 'rollup-plugin-dts';
// import postcss from 'rollup-plugin-postcss';
// import scss from 'rollup-plugin-scss';
// import pkg from './package.json' with { type: 'json' };

// export default [
//   {
//     input: 'src/index.ts',
//     output: [
//       {
//         file: pkg.main,
//         format: 'cjs',
//         sourcemap: true,
//       },
//       {
//         file: pkg.module,
//         format: 'esm',
//         sourcemap: true,
//       },
//     ],
//     plugins: [
//       resolve(),
//       commonjs(),
//       typescript({ tsconfig: './tsconfig.json', exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.ts'] }),
//       scss({
//         output: "dist/esm/css/style.css",
//         failOnError: true,
//       }),
//       postcss({ extensions: ['.css'], inject: true, extract: false, minimize: true, sourceMap: true, modules: true }),
//     ],
//   },
//   {
//     input: 'dist/esm/types/index.d.ts',
//     output: [{ file: 'dist/index.d.ts', format: 'esm' }],
//     plugins: [dts()],
//     external: [/\.(css|less|scss)$/],
//   },
// ];



/** ────────────────────────────────────────────────────────────

# rollup.config.mjs

# ────────────────────────────────────────────────────────────
*/


import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import image from '@rollup/plugin-image';
import { visualizer } from 'rollup-plugin-visualizer';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json' with { type: 'json' };

export default [
  {
    input: pkg.source,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
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
        exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.tsx'],
      }),
      image(),
      visualizer(),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
  {
    input: 'dist/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];