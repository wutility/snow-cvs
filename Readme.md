# ❄️ Nice snow canvas  
Nice snow animation using canvas

### [Demo](https://wutility.github.io/snow-cvs)

![snow animation](https://badgen.net/npm/dt/hixo)  [![](https://data.jsdelivr.com/v1/package/npm/snow-cvs/badge)](https://www.jsdelivr.com/package/npm/snow-cvs) ![bundlephobia badge](https://badgen.net/bundlephobia/min/snow-cvs) ![bundlephobia badge](https://badgen.net/bundlephobia/minzip/snow-cvs)


```bash
$ npm i snow-cvs --save
```

### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/snow-cvs/dist/index.min.js"></script>
<!-- access via object : SnowCanvas -->
```

## Usage
```
import SnowCanvas from 'snow-cvs';
```

## Examples

```js
const Snow = new SnowCanvas()

// Set number of flakes (optional)
// default: window.innerWidth / 6
Snow.createSnowFlakes(2);

const canvas = Snow.getCanvas(); // return HTMLCanvasElement
document.body.appendChild(canvas);
```

## License
MIT