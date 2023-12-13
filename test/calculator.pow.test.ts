import { Calculator } from "../src/calculator";

describe('Calculator add tests',()=>{

    let calculator: Calculator;

    beforeEach(()=>{
        calculator = new Calculator;
    });

    test('Power test with positive integers', ()=>{
        // Arrange
        const a = 2;
        const b = 3;
        const expected = 8

        // Act
        const actual = calculator.Pow(a,b);

        // Assert
        expect(actual).toBe(expected);

    });

    test('Power test with negative integers', ()=>{
        // Arrange
        const a = -2;
        const b = -3;
        const expected = -0.125

        // Act
        const actual = calculator.Pow(a,b);

        // Assert
        expect(actual).toBe(expected);
        
    });

    test('Power test with zero as the base', ()=>{
        // Arrange
        const a = 0;
        const b = 2;
        const expected = 0

        // Act
        const actual = calculator.Pow(a,b);

        // Assert
        expect(actual).toBe(expected);
        
    });

    test('Power test with zero as the exponent', ()=>{
        // Arrange
        const a = 2;
        const b = 0;
        const expected = 1

        // Act
        const actual = calculator.Pow(a,b);

        // Assert
        expect(actual).toBe(expected);
        
    });

    test('Power test with  floating-point numbers', ()=>{
        // Arrange
        const a = 1.5;
        const b = 2.5;
        const expected = 2.7556759606310752

        // Act
        const actual = calculator.Pow(a,b);

        // Assert
        expect(actual).toBe(expected);
        
    });

    test('Power test with bigInt result', ()=>{
        // Arrange
        const a = 2;
        const b = 253;

        // Act

        // Assert
        expect(()=>{
            calculator.Pow(a,b);
        }).toThrow('Error: result is really big integer, precision may be lost!')
        
    });

});