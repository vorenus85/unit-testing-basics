import { Calculator } from "../src/calculator";

describe('Calculator Multiplication tests',()=>{

    let calculator: Calculator;

    beforeEach(()=>{
        calculator = new Calculator;
    });

    test("Multiplication test with positive integers", ()=>{
        // Arrange
        const a = 2;
        const b = 3;
        const expected = 6;

        // Act
        const actual = calculator.Multi(a,b);
        
        // Assert
        expect(actual).toBe(expected);
    });

    test("Multiplication test with negative integers", ()=>{
        // Arrange
        const a = -2;
        const b = -3;
        const expected = 6;

        // Act
        const actual = calculator.Multi(a,b);
        
        // Assert
        expect(actual).toBe(expected);
    });

    test("Multiplication test with zero", ()=>{
        // Arrange
        const a = 2;
        const b = 0;
        const expected = 0;

        // Act
        const actual = calculator.Multi(a,b);
        
        // Assert
        expect(actual).toBe(expected);
    });

    test("Multiplication test with floating-point numbers", ()=>{
        // Arrange
        const a = 2.25;
        const b = 2;
        const expected = 4.5;

        // Act
        const actual = calculator.Multi(a,b);
        
        // Assert
        expect(actual).toBe(expected);
    });

    test("Multiplication test with commutative property", ()=>{
        // Arrange
        const a = 2;
        const b = 3;
        const expected = 6;

        // Act
        const actual1 = calculator.Multi(a,b);
        const actual2 = calculator.Multi(b,a);
        
        // Assert
        expect(actual1).toBe(expected);
        expect(actual2).toBe(expected);
    });

});