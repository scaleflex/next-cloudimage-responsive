/* eslint-disable import/no-anonymous-default-export */
import { babel } from '@rollup/plugin-babel';

import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';
import { generateScopedName } from './rollup.utils';


export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'es',
      exports: 'named',
      sourcemap: true,
      strict: true,
    },
  ],
  plugins: [
    babel({
      babelHelpers: 'runtime',
      presets: ['next/babel'],
    }),
    peerDepsExternal(),
    resolve(),
    postcss({
      extract: false,
      minimize: true,
      modules: {
        generateScopedName,
      },
    }),
    commonjs(),
    typescript(),
    terser(),
  ],
  external: ['react', 'react-dom'],
};
