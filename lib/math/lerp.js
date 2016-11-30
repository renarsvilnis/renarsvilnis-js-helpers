'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lerp;

var _clamp = require('./clamp');

var _clamp2 = _interopRequireDefault(_clamp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function lerp(currentValue, targetValue, amount) {
  // normalize amount values
  amount = (0, _clamp2.default)(amount, 0, 1);

  return currentValue + (targetValue - currentValue) * amount;
}