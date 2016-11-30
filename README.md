
## Collection of personal JavaScript helper function & React components

```javascript
npm i -S renarsvilnis-js-helpers
// or
yarn add renarsvilnis-js-helpers
```

### Usage

```javascript
// All files are imported by the patter below
import <functionName> from 'renarsvilnis-js-helpers/lib/<helperCategory>/<functionName>';

// examples
import normaliseFontRendering from 'renarsvilnis-js-helpers/lib/browser/normaliseFontRendering';
import calcFitDimensions from 'renarsvilnis-js-helpers/lib/dom/calcFitDimensions';
```

### API
- browser
  - `normaliseFontRendering()` - Normalizes light/ultra-light font rendering in Safari and Windows

- dom
  - `calcFillDimensions(width, height, containerWidth, containerHeight, options = {upscale: true})`
  - `calcFitDimensions(width, height, containerWidth, containerHeight, options = {upscale: true})`
  - `getImageDimensions(url)`

- math
  - `clamp(val, min, max)`
  - `easings`
  - `lerp(currentValue, targetValue, amount)`
  - `range(val, inMin, inMax, outMin, outMax)`

- react
  - `<DelayMount>`
  - `<FirstChildReactCSSTransitionGroup>`
  - `<ObjectFill>`
  - `<ObjectFit>`

- webpack
  - `getCurrentScriptPath()`

### Configuring Webpack so assets work for ANY base url

This collection includes helper functions for configuring Webpack, so that the bundled assets work under any domain/subdomain.

In order to achieve this you need to do 3 things:

1. Specify `output.pathinfo = false` in `webpack.config.js`
2. *DEVELOPMENT ONLY* Tell webpack hot middleware `webpack-hot-middleware/client?dynamicPublicPath=true`
3. Set `__webpack_public_path__` variable **at the start** of the Webpack entry file.


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
 * As Webpack manages all assets, including images, videos, etc. It needs to know
 * the base url. This can be set during build process in webpack-config
 * under "output.publicPath", but here to make webpack assets portable we fetch
 * the url from the entry file through getCurrentScriptPath.
 *
 * @reference https://medium.com/@aviv.rosental/portable-bundle-with-webpack-d2eed216cd4c#.8d0ei927i
 * @reference https://github.com/webpack/webpack/issues/2776
 */
const getCurrentScriptPath = require('renarsvilnis-js-helpers/webpack/getCurrentScriptPath').default;
__webpack_public_path__ = getCurrentScriptPath() + '/'; // eslint-disable-line camelcase, no-undef
```
