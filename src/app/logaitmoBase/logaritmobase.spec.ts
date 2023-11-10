import { logaritmoBase10 } from "./logaritmobase";

describe("Tests for the base 10 logarithm function", () => {
  it("Should calculate the base 10 logarithm of 10 as 1", () => {
    // Arrange
    let result = 0;

    // Act
    result = logaritmoBase10(10);

    // Assert
    expect(result).toBe(1);
  });

  it("Should calculate the base 10 logarithm of 100 as 2", () => {
    // Arrange
    let result = 0;

    // Act
    result = logaritmoBase10(100);

    // Assert
    expect(result).toBe(2);
  });

  it("Should calculate the base 10 logarithm of 1000 as 3", () => {
    // Arrange
    let result = 0;

    // Act
    result = logaritmoBase10(1000);

    // Assert
    expect(result).toBe(3);
  });
});
