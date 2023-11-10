export function logaritmoBase10(n: number): number {
  if (n <= 0) {
    throw new Error(
      "El logaritmo en base 10 solo está definido para números positivos."
    );
  }
  return Math.log10(n);
}
