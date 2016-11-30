/**
 * Calculate fit dimensions
 * @method calcFitDimensions
 * @param  {Number}  width
 * @param  {Number}  height
 * @param  {Number}  containerWidth
 * @param  {Number}  containerHeight
 * @param  {Object}
 * @param  {Boolean} [options.upscale=false]
 * @return {Object}
 */
export default function calcFitDimensions (width, height, containerWidth, containerHeight, options) {
  options = Object.assign({upscale: true}, options);

  const imgRatio = width / height;
  let newWidth;
  let newHeight;

  // if image is horizontal
  if (imgRatio > 1) {
    newWidth = options.upscale ? containerWidth : Math.min(width, containerWidth);
    newHeight = newWidth / imgRatio;

    // maybe needed
    if (newWidth > containerWidth) {
      newWidth = width > containerWidth ? containerWidth : width;
      newHeight = newWidth / imgRatio;
    }

    // if image is vertical
  } else {
    newHeight = options.upscale ? containerHeight : Math.min(height, containerHeight);
    newWidth = newHeight * imgRatio;
  }

  if (newWidth > containerWidth) {
    newWidth = containerWidth;
    newHeight = newWidth / imgRatio;
  }

  if (newHeight > containerHeight) {
    newHeight = containerHeight;
    newWidth = newHeight * imgRatio;
  }

  return {
    width: newWidth,
    height: newHeight
  };
}
