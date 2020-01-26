import { terser } from 'rollup-plugin-terser';

export default [{ input: 'snow.js', },
{
  input: 'snow.js',
  output: [
    {
      name: 'Snow',
      file: 'dist/index.js',
      format: 'umd',
      plugins: [terser()]
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      plugins: [terser()]
    }
  ]
}];