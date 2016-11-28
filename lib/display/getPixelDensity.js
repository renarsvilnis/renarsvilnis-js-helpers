/**
 * Get pixel window pixel density
 * @method getPixelDensity
 * @return {Number}
 */
export default function getPixelDensity () {
  return window.devicePixelRatio || 1;
}
