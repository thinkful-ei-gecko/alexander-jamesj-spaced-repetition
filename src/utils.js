export function gradient(num) {
  return { color: `hsl(${Math.min((num / 100) * 120, 120)}, 80%, 50%)` }
}