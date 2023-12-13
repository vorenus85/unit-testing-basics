import { Calculator } from "../src/calculator";

describe('Calculator Subtraction tests',()=>{

    let calculator: Calculator;

    beforeEach(()=>{
        calculator = new Calculator;
    });

    test("Subtraction test with positive integers", ()=>{
        // Arrange
        const a = 2;
        const b = 1;
        const expected = 1;
        // Act
        const actual = calculator.Sub(a,b);

        // Assert
        expect(actual).toBe(expected)
    });

    test("Subtraction test with negative integers", ()=>{
        // Arrange
        const a = -2;
        const b = -4;
        const expected = 2;
        // Act
        const actual = calculator.Sub(a,b);

        // Assert
        expect(actual).toBe(expected)
    });

    test("Subtraction test with negative zero", ()=>{
        // Arrange
        const a = 0;
        const b = -4;
        const expected = 4;
        // Act
        const actual = calculator.Sub(a,b);

        // Assert
        expect(actual).toBe(expected)
    });

    test("Subtraction test with  floating-point numbers", ()=>{
        // Arrange
        const a = 5.25;
        const b = 1.25;
        const expected = 4;
        // Act
        const actual = calculator.Sub(a,b);

        // Assert
        expect(actual).toBe(expected)
    });

    test("Subtraction test with a less than b", ()=>{
        // Arrange
        const a = 6;
        const b = 3;
        const expected = 3;
        // Act
        const actual = calculator.Sub(a,b);

        // Assert
        expect(actual).toBe(expected)
    });

    test("Subtraction test with b less than a", ()=>{
        // Arrange
        const a = 3;
        const b = 6;
        const expected = -3;
        // Act
        const actual = calculator.Sub(a,b);

        // Assert
        expect(actual).toBe(expected)
    });

});