import { Calculator } from "../src/calculator";

describe('Calculator add tests',()=>{

    let calculator: Calculator;

    beforeEach(()=>{
        calculator = new Calculator;
    });

    test('Square root test with positive number', ()=>{
        // Arrange
        const a = 9;
        const expected = 3;

        // Act
        const actual = calculator.Sqrt(a);

        // Assert
        expect(actual).toBe(expected);
    });

    test('Square root test with zero', ()=>{
        // Arrange
        const a = 0;
        const expected = 0;

        // Act
        const actual = calculator.Sqrt(a);

        // Assert
        expect(actual).toBe(expected);
    });

    test('Square root of a negative number should throw an Error', ()=>{
        // Arrange
        const a = -9;

        // Act

        // Assert
        expect(()=>{
            calculator.Sqrt(a);
        }).toThrow();
    });

});