"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getImageDimensions;
/* global Image */

/**
 * Get image a dimenions
 * @param  {Image} url
 * @return {Promise<Object>}
 */
function getImageDimensions(url) {
  return new Promise(function (resolve, reject) {
    var img = new Image();

    img.onload = function () {
      return resolve({
        width: img.width,
        height: img.height
      });
    };

    // silent errors?
    img.onerror = function () {
      return reject();
    };

    img.src = url;
  });
}