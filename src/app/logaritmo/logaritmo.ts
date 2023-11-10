export function logaritmoNatural(n: number): number {
  if (n <= 0) {
    throw new Error(
      "El logaritmo natural solo está definido para números positivos."
    );
  }
  return Math.log(n);
}
