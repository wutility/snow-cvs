import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.js',
    output: [
      {
        name: 'SnowCanvas',
        file: 'dist/index.js',
        format: 'umd'
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm'
      }
    ],
    plugins: [terser()]
  }
];