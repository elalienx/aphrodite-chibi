// Node modules
import { describe, expect, test } from "vitest";

// Project files
import cleanInitialInput from "./cleanInitialInput";

describe("Number logic", () => {
  test("Converts numeric values to strings", () => {
    // Arrange
    const initialInput = { name: "Candy", quantity: 30 };
    const result = { name: "Candy", quantity: "30" };

    // Act
    const testResult = cleanInitialInput({ input: initialInput });

    // Assert
    expect(testResult).toStrictEqual(result);
  });

  test("Keep zero numbers if flag treatZeroAsEmpty is off", () => {
    // Arrange
    const initialInput = { item: "Eggs", quantity: 0 };
    const result = { item: "Eggs", quantity: "0" };

    // Act
    const testResult = cleanInitialInput({ input: initialInput, treatZeroAsEmpty: false });

    // Assert
    expect(testResult).toStrictEqual(result);
  });

  test("Remove zero numbers if flag treatZeroAsEmpty is on", () => {
    // Arrange
    const initialInput = { item: "Eggs", quantity: 0 };
    const result = { item: "Eggs", quantity: "" };

    // Act
    const testResult = cleanInitialInput({ input: initialInput, treatZeroAsEmpty: true });

    // Assert
    expect(testResult).toStrictEqual(result);
  });
});

describe("Boolean logic", () => {
  test("Converts boolean values to strings", () => {
    // Arrange
    const initialInput = { has_hear_about_miku: true, is_chibi: false };
    const result = { has_hear_about_miku: "true", is_chibi: "false" };

    // Act
    const testResult = cleanInitialInput({ input: initialInput });

    // Assert
    expect(testResult).toStrictEqual(result);
  });
});

describe("Recursive logic", () => {
  test("Recursively converts values inside nested objects", () => {
    // Arrange
    const initialInput = {
      user: { name: "Miku", age: 16, isActive: true },
    };
    const result = {
      user: { name: "Miku", age: "16", isActive: "true" },
    };

    // Act
    const testResult = cleanInitialInput({ input: initialInput });

    // Assert
    expect(testResult).toStrictEqual(result);
  });

  test("Recursively converts values in arrays and arrays of objects", () => {
    // Arrange
    const initialInput = {
      scores: [10, 20, 0],
      friends: [
        { id: 1, isBest: true },
        { id: 2, isBest: false },
      ],
    };
    const result = {
      scores: ["10", "20", ""],
      friends: [
        { id: "1", isBest: "true" },
        { id: "2", isBest: "false" },
      ],
    };

    // Act
    const testResult = cleanInitialInput({ input: initialInput, treatZeroAsEmpty: true });

    // Assert
    expect(testResult).toStrictEqual(result);
  });

  test("Safely ignores null values without crashing", () => {
    // Arrange
    const initialInput = { settings: null, items: [null, 1] };
    const result = { settings: null, items: [null, "1"] };

    // Act
    const testResult = cleanInitialInput({ input: initialInput });

    // Assert
    expect(testResult).toStrictEqual(result);
  });
});
