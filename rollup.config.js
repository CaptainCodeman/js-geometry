'use strict';

import pkg from './package.json';
import typescript from 'rollup-plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/' + pkg.main,
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    typescript({ typescript: require('typescript') }),
  ],
}