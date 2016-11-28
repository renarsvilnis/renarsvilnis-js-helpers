export default function lerp (currentValue, targetValue, amount) {
  // normalize amount values
  amount = amount < 0 ? 0 : amount;
  amount = amount > 1 ? 1 : amount;

  return currentValue + (targetValue - currentValue) * amount;
}
