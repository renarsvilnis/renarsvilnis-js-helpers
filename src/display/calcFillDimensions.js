/**
 * Calculate fill dimensions
 * @method calcFitDimensions
 * @param  {Number}  width
 * @param  {Number}  height
 * @param  {Number}  containerWidth
 * @param  {Number}  containerHeight
 * @param  {Object}  options
 * @param  {Boolean} [options.upscale=false]
 * @return {Object}
 */
export default function calcFillDimensions (width, height, containerWidth, containerHeight, options) {
  options = Object.assign({upscale: true}, options);

  let newWidth;
  let newHeight;

  const shortestImageSide = Math.min(width, height);
  const shortestContainerSide = Math.min(containerWidth, containerHeight);

  let scale = shortestContainerSide / shortestImageSide;
  scale = options.upscale ? scale : Math.max(options.upscale, 1);

  newWidth = width * scale;
  newHeight = height * scale;

  if (!options.upscale) {
    newWidth = Math.min(newHeight, width);
    newHeight = Math.min(newWidth, height);
  }

  return {
    width: newWidth,
    height: newHeight
  };
}
