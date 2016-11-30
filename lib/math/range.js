"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = range;
function range(val, inMin, inMax, outMin, outMax) {
  return (val - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}