
## Collection of personal JavaScript helper function & React components

### browser
- `normaliseFontRendering()` - Normalizes light/ultra-light font rendering in Safari and Windows

### dom
- `calcFillDimensions(width, height, containerWidth, containerHeight, options = {upscale: true})`
- `calcFitDimensions(width, height, containerWidth, containerHeight, options = {upscale: true})`
- `getImageDimensions(url)`

### math
- `clamp(val, min, max)`
- `easings`
- `lerp(currentValue, targetValue, amount)`
- `range(val, inMin, inMax, outMin, outMax)`

### React Components
- `DelayMount`
- `FirstChildReactCSSTransitionGroup`
- `ObjectFill`
- `ObjectFit`

### webpack

- `getCurrentScriptPath()`

This collection includes helper functions for configuring Webpack, so that the bundled assets work under any domain/subdomain.

`webpack.config.js`

```javascript
{
  output: {
    pathinfo: false
  },
  entry: {
    <filename>: [
      ...,
      `webpack-hot-middleware/client?dynamicPublicPath=true`, // NOTE: added only while developing
      path.join(__dirname, 'src/index.js')
    ]
  }
```

`src/index.js`

```javaScript
/**
 * As Webpack manages all assets, including iamges, videos, etc it needs to know
 * the url of the root, this can be set during build process in webpack-config
 * under "output.publicPath", but here to make webpack more "portable" we fetch
 * the url from the entry file through getCurrentScriptPath.
 *
 * @reference https://medium.com/@aviv.rosental/portable-bundle-with-webpack-d2eed216cd4c#.8d0ei927i
 * @reference https://github.com/webpack/webpack/issues/2776
 */
const getCurrentScriptPath = require('renarsvilnis-js-helpers/webpack/getCurrentScriptPath').default;
__webpack_public_path__ = getCurrentScriptPath() + '/'; // eslint-disable-line camelcase, no-undef
```
