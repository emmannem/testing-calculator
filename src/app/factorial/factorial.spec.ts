import { factorialIterativo } from "./factorial";

describe("Tests for the factorial function", () => {
  it("Should calculate the factorial of 0 as 1", () => {
    // Arrange
    let result = 0;
    // Act
    result = factorialIterativo(0);

    // Assert
    expect(result).toBe(1);
  });

  it("Should calculate the factorial of 5 as 120", () => {
    // Arrange
    let result = 0;

    // Act
    result = factorialIterativo(5);

    // Assert
    expect(result).toBe(120);
  });

  it("Should calculate the factorial of 20 as 3628800", () => {
    // Arrange
    let result = 0;

    // Act
    result = factorialIterativo(10);

    // Assert
    expect(result).toBe(3628800);
  });
});
