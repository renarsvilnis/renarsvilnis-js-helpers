/* global Image */

/**
 * Load image and get image dimensions
 * @param  {Image} url
 * @return {Promise<Object>}
 */
export default function getImageDimensions (url) {
  return new Promise((resolve, reject) => {
    let img = new Image();

    img.onload = () => resolve({
      width: img.width,
      height: img.height
    });

    // silent errors?
    img.onerror = () => reject();

    img.src = url;
  });
}
