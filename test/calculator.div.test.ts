import { Calculator } from "../src/calculator";

describe('Calculator Division tests',()=>{

    let calculator: Calculator;

    beforeEach(()=>{
        calculator = new Calculator;
    });

    test("Division test with positive integers", ()=>{
        // Arrange
        const a = 6;
        const b = 3;
        const expected = 2;

        // Act
        const actual = calculator.Div(a, b);

        // Assert
        expect(actual).toBe(expected);
    });

    test("Division test with negative integers", ()=>{
        // Arrange
        const a = 6;
        const b = -3;
        const expected = -2;

        // Act
        const actual = calculator.Div(a, b);

        // Assert
        expect(actual).toBe(expected);
    });

    test("Division test with zero as dividend", ()=>{
        // Arrange
        const a = 0;
        const b = 3;
        const expected = 0;

        // Act
        const actual = calculator.Div(a, b);

        // Assert
        expect(actual).toBe(expected);
    });

    test("Division test with zero as divisor should throw an Error", ()=>{
        // Arrange
        const a = 3;
        const b = 0;
        const expected = "Error: divisor is equal to zero";

        // Act

        // Assert
        expect(() => {
            calculator.Div(a, b);
          }).toThrow(expected);
    });

    test("Division test with floating-point numbers", ()=>{
        // Arrange
        const a = 3;
        const b = 1.5;
        const expected = 2;

        // Act
        const actual = calculator.Div(a, b);

        // Assert
        expect(actual).toBe(expected);
    });

});