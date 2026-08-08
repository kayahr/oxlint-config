export function sum(a: number, b: number): number {
    return a + b;
}

sum(1, sum(2, sum(3, sum(5, 6))));
