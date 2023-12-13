import { Calculator } from "../src/calculator";

describe('Calculator Addition tests',()=>{

    let calculator: Calculator;

    beforeEach(()=>{
        calculator = new Calculator;
    });

    test("Add test with positive integers", ()=>{
        //Arrange
        const a = 5;
        const b = 3;
        const expected = 8;

        // Act
        const actual = calculator.Add(a, b);

        // Assert
        expect(actual).toBe(expected);
    });

    test("Add test with negative integers", ()=>{
        //Arrange
        const a = -5;
        const b = -1;
        const expected = -6;

        // Act
        const actual = calculator.Add(a, b);

        // Assert
        expect(actual).toBe(expected);
    });

    test("Add test with zero", ()=>{
        //Arrange
        const a = 6;
        const b = 0;
        const expected = 6;

        // Act
        const actual = calculator.Add(a, b);

        // Assert
        expect(actual).toBe(expected);
    });

    test("Add test with floating numbers", ()=>{
        //Arrange
        const a = 5.25;
        const b = 1.75;
        const expected = 7;

        // Act
        const actual = calculator.Add(a, b);

        // Assert
        expect(actual).toBe(expected);
    });

    test("Add test with commutative property", ()=>{
        //Arrange
        const a = 1;
        const b = 7;
        const expected = 8;

        // Act
        const actual1 = calculator.Add(b, a);
        const actual2 = calculator.Add(a, b);

        // Assert
        expect(actual1).toBe(expected);
        expect(actual2).toBe(expected);
    });

});