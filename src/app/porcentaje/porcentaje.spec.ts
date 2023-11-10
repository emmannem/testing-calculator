import { calcularPorcentaje } from "./porcentaje";

describe("Tests for the percentage calculation function", () => {
  it("Should calculate 10% of 100 as 10", () => {
    // Arrange
    let result = 0;

    // Act
    result = calcularPorcentaje(100, 10);

    // Assert
    expect(result).toBe(10);
  });

  it("Should calculate 50% of 200 as 100", () => {
    // Arrange
    let result = 0;

    // Act
    result = calcularPorcentaje(200, 50);

    // Assert
    expect(result).toBe(100);
  });

  it("Should calculate 25% of 80 as 20", () => {
    // Arrange
    let result = 0;

    // Act
    result = calcularPorcentaje(80, 25);

    // Assert
    expect(result).toBe(20);
  });
});
