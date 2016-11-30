import clamp from './clamp';

export default function lerp (currentValue, targetValue, amount) {
  // normalize amount values
  amount = clamp(amount, 0, 1);

  return currentValue + (targetValue - currentValue) * amount;
}
