import { calcularRaiz } from "./raiz";

describe("Tests for the root calculation function", () => {
  it("Should calculate the square root of 16 as 4", () => {
    // Arrange
    let result = 0;

    // Act
    result = calcularRaiz(16, 2);

    // Assert
    expect(result).toBe(4);
  });

  it("Should calculate the cube root of 27 as 3", () => {
    // Arrange
    let result = 0;

    // Act
    result = calcularRaiz(27, 3);

    // Assert
    expect(result).toBe(3);
  });

  it("Should calculate the fourth root of 81 as 3", () => {
    // Arrange
    let result = 0;

    // Act
    result = calcularRaiz(81, 4);

    // Assert
    expect(result).toBe(3);
  });
});
