export default function CalculateNourishment(nutritionPerGram, amount, unitMultiplier, dest) {
  const multiplier = amount * unitMultiplier;

  for (const key in nutritionPerGram) {
    if (dest[key]) {
      dest[key].value += nutritionPerGram[key] * multiplier;
    }
  }
}
