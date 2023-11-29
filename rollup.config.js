const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { babel } = require('@rollup/plugin-babel');
const { terser } = require('rollup-plugin-terser');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
  input: 'src/renderer.mjs',
  output: {
    file: 'public/bundle.js',
    format: 'iife',
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env'],
    }),
    terser(),
  ],
};
