import { terser } from 'rollup-plugin-terser';

export default [{
  input: 'snow.js',
  plugins: [terser()],
},
{
  input: 'snow.js',
  output: [
    {
      name: 'Snow',
      file: 'dist/index.js',
      format: 'umd'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm'
    }
  ]
}];