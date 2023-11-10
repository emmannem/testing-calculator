export function calcularRaiz(base: number, indice: number): number {
  if (base < 0 && indice % 2 === 0) {
    throw new Error(
      "No se puede calcular la raíz de un número negativo con un índice par."
    );
  }
  return Math.pow(base, 1 / indice);
}
