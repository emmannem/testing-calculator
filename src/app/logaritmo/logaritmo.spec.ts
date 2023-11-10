import { logaritmoNatural } from "./logaritmo";

describe("Tests for the natural logarithm function", () => {
  it("should calculate the natural logarithm of 1 as 0", () => {
    // Arrange
    let result = 0;

    // Act
    result = logaritmoNatural(1);
    // Assert
    expect(result).toBe(0);
  });

  it("should calculate the natural logarithm of 10", () => {
    // Arrange
    let result = 0;

    // Act
    result = logaritmoNatural(10);

    // Assert
    expect(result).toBeCloseTo(2.3025, 2);
  });

  it("should calculate the natural logarithm of 2.5", () => {
    // Arrange
    let result = 0;

    // Act
    result = logaritmoNatural(2.5);

    // Assert
    expect(result).toBeCloseTo(0.91629, 2);
  });
});
