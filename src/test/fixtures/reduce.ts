export function test(): number {
    const values = [ 1, 2, 3 ];
    return values.reduce((a, b) => a > 0 ? (a + b) : (b - b), 0);
}
