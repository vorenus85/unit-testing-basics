export class Calculator {
    public Add(a: number, b: number){
        return a + b;
    }

    public Sub(a: number, b: number) {
        return a - b;
    }

    public Multi(a:number, b: number) {
        return a * b;
    }

    public Div(a:number, b: number) {
        if(Number.isFinite(a / b)) {
            return a / b;
        } else {
            throw new Error('Error: divisor is equal to zero');
        }
    }

    public Sqrt(a:number) {
        if(a < 0 ){
            throw new Error('Error: cannot find the square root of a negative number');
        } else {
            return Math.sqrt(a);
        }
        
    }

    public Pow(a: number, b: number) {
        const result = Math.pow(a, b);
        if(result < Number.MAX_SAFE_INTEGER){
            return result;
        } else {
            throw new Error('Error: result is really big integer, precision may be lost!');
        }
    }
}

