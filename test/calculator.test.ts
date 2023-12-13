import { Calculator } from "../src/calculator";

describe('Calculator Addition tests::',()=>{

    let calculator: Calculator;

    beforeEach(()=>{
        calculator = new Calculator;
    });

    test("with positive integers", ()=>{
        //Arrange
        const a = 5;
        const b = 3;
        const expected = 8;

        // Act
        const actual = calculator.Add(a, b);

        // Assert
        expect(actual).toBe(expected);
    });

    test("with negative integers", ()=>{
        //Arrange
        const a = -5;
        const b = -1;
        const expected = -6;

        // Act
        const actual = calculator.Add(a, b);

        // Assert
        expect(actual).toBe(expected);
    });

    test("with zero", ()=>{
        //Arrange
        const a = 6;
        const b = 0;
        const expected = 6;

        // Act
        const actual = calculator.Add(a, b);

        // Assert
        expect(actual).toBe(expected);
    });

    test("with floating numbers", ()=>{
        //Arrange
        const a = 5.25;
        const b = 1.75;
        const expected = 7;

        // Act
        const actual = calculator.Add(a, b);

        // Assert
        expect(actual).toBe(expected);
    });

    test("with commutative property", ()=>{
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

describe('Calculator Subtraction tests::',()=>{

    let calculator: Calculator;

    beforeEach(()=>{
        calculator = new Calculator;
    });

    test("with positive integers", ()=>{
        // Arrange
        const a = 2;
        const b = 1;
        const expected = 1;
        // Act
        const actual = calculator.Sub(a,b);

        // Assert
        expect(actual).toBe(expected)
    });

    test("with negative integers", ()=>{
        // Arrange
        const a = -2;
        const b = -4;
        const expected = 2;
        // Act
        const actual = calculator.Sub(a,b);

        // Assert
        expect(actual).toBe(expected)
    });

    test("with negative zero", ()=>{
        // Arrange
        const a = 0;
        const b = -4;
        const expected = 4;
        // Act
        const actual = calculator.Sub(a,b);

        // Assert
        expect(actual).toBe(expected)
    });

    test("with floating-point numbers", ()=>{
        // Arrange
        const a = 5.25;
        const b = 1.25;
        const expected = 4;
        // Act
        const actual = calculator.Sub(a,b);

        // Assert
        expect(actual).toBe(expected)
    });

    test("with a less than b", ()=>{
        // Arrange
        const a = 6;
        const b = 3;
        const expected = 3;
        // Act
        const actual = calculator.Sub(a,b);

        // Assert
        expect(actual).toBe(expected)
    });

    test("with b less than a", ()=>{
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

describe('Calculator Multiplication tests::',()=>{

    let calculator: Calculator;

    beforeEach(()=>{
        calculator = new Calculator;
    });

    test("with positive integers", ()=>{
        // Arrange
        const a = 2;
        const b = 3;
        const expected = 6;

        // Act
        const actual = calculator.Multi(a,b);
        
        // Assert
        expect(actual).toBe(expected);
    });

    test("with negative integers", ()=>{
        // Arrange
        const a = -2;
        const b = -3;
        const expected = 6;

        // Act
        const actual = calculator.Multi(a,b);
        
        // Assert
        expect(actual).toBe(expected);
    });

    test("with zero", ()=>{
        // Arrange
        const a = 2;
        const b = 0;
        const expected = 0;

        // Act
        const actual = calculator.Multi(a,b);
        
        // Assert
        expect(actual).toBe(expected);
    });

    test("with floating-point numbers", ()=>{
        // Arrange
        const a = 2.25;
        const b = 2;
        const expected = 4.5;

        // Act
        const actual = calculator.Multi(a,b);
        
        // Assert
        expect(actual).toBe(expected);
    });

    test("with commutative property", ()=>{
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

describe('Calculator Division tests::',()=>{

    let calculator: Calculator;

    beforeEach(()=>{
        calculator = new Calculator;
    });

    test("with positive integers", ()=>{
        // Arrange
        const a = 6;
        const b = 3;
        const expected = 2;

        // Act
        const actual = calculator.Div(a, b);

        // Assert
        expect(actual).toBe(expected);
    });

    test("with negative integers", ()=>{
        // Arrange
        const a = 6;
        const b = -3;
        const expected = -2;

        // Act
        const actual = calculator.Div(a, b);

        // Assert
        expect(actual).toBe(expected);
    });

    test("with zero as dividend", ()=>{
        // Arrange
        const a = 0;
        const b = 3;
        const expected = 0;

        // Act
        const actual = calculator.Div(a, b);

        // Assert
        expect(actual).toBe(expected);
    });

    test("with zero as divisor should throw an Error", ()=>{
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

    test("with floating-point numbers", ()=>{
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

describe('Calculator Square root tests',()=>{

    let calculator: Calculator;

    beforeEach(()=>{
        calculator = new Calculator;
    });

    test('with positive number', ()=>{
        // Arrange
        const a = 9;
        const expected = 3;

        // Act
        const actual = calculator.Sqrt(a);

        // Assert
        expect(actual).toBe(expected);
    });

    test('with zero', ()=>{
        // Arrange
        const a = 0;
        const expected = 0;

        // Act
        const actual = calculator.Sqrt(a);

        // Assert
        expect(actual).toBe(expected);
    });

    test('of a negative number should throw an Error', ()=>{
        // Arrange
        const a = -9;

        // Act

        // Assert
        expect(()=>{
            calculator.Sqrt(a);
        }).toThrow();
    });

});

describe('Calculator Power tests',()=>{

    let calculator: Calculator;

    beforeEach(()=>{
        calculator = new Calculator;
    });

    test('with positive integers', ()=>{
        // Arrange
        const a = 2;
        const b = 3;
        const expected = 8

        // Act
        const actual = calculator.Pow(a,b);

        // Assert
        expect(actual).toBe(expected);

    });

    test('with negative integers', ()=>{
        // Arrange
        const a = -2;
        const b = -3;
        const expected = -0.125

        // Act
        const actual = calculator.Pow(a,b);

        // Assert
        expect(actual).toBe(expected);
        
    });

    test('with zero as the base', ()=>{
        // Arrange
        const a = 0;
        const b = 2;
        const expected = 0

        // Act
        const actual = calculator.Pow(a,b);

        // Assert
        expect(actual).toBe(expected);
        
    });

    test('with zero as the exponent', ()=>{
        // Arrange
        const a = 2;
        const b = 0;
        const expected = 1

        // Act
        const actual = calculator.Pow(a,b);

        // Assert
        expect(actual).toBe(expected);
        
    });

    test('with floating-point numbers', ()=>{
        // Arrange
        const a = 1.5;
        const b = 2.5;
        const expected = 2.7556759606310752

        // Act
        const actual = calculator.Pow(a,b);

        // Assert
        expect(actual).toBe(expected);
        
    });

    test('with bigInt result', ()=>{
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