/* eslint-disable import/no-anonymous-default-export */
import { babel } from '@rollup/plugin-babel';


import commonjs from '@rollup/plugin-commonjs';
import css from '@modular-css/rollup';

import pkg from './package.json';


export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'es',
      exports: 'named',
      sourcemap: 'inline',
      strict: true,
    },
  ],
  plugins: [babel({ babelHelpers: 'runtime', presets: ['next/babel'] }),
    commonjs(),
    css(),
  ],
  external: ['react', 'react-dom'],
};
