# ❄️ Nice snow canvas  
Nice snow animation using canvas

### [Demo](https://snow-canvas.neocities.org)

[![](https://data.jsdelivr.com/v1/package/npm/snow-cvs/badge)](https://www.jsdelivr.com/package/npm/snow-cvs) ![bundlephobia badge](https://badgen.net/bundlephobia/min/snow-cvs) ![bundlephobia badge](https://badgen.net/bundlephobia/minzip/snow-cvs)


```js
$ npm i snow-cvs --save
```

### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/snow-cvs@1.0.1/dist/index.min.js"></script>
access via object : Snow
Example : Snow.getCanvas()
<canvas width="1366" height="354"></canvas>
```

## Usage
```
import Snow from 'snow-cvs';
```

## Methods & Examples

- **getCanvas(): HTMLCanvasElement**    
```js
Snow.getCanvas() // return HTMLCanvasElement
document.body.appendChild(Snow.getCanvas())
```

## License
MIT