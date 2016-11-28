/**
 * Calculate fit dimensions
 * @method calcFitDimensions
 * @param  {Number} width
 * @param  {Number} height
 * @param  {Number} containerWidth
 * @param  {Number} containerHeight
 * @return {Object}
 */
export default function calcFitDimensions (width, height, containerWidth, containerHeight) {
  const imgRatio = width / height;
  let newWidth;
  let newHeight;

  // if image is horizontal
  if (imgRatio > 1) {
    newWidth = Math.min(width, containerWidth);
    newHeight = newWidth / imgRatio;

    // maybe needed
    if (newWidth > containerWidth) {
      newWidth = width > containerWidth ? containerWidth : width;
      newHeight = newWidth / imgRatio;
    }

    // if image is vertical
  } else {
    newHeight = Math.min(height, containerHeight);
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
