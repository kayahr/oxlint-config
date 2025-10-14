export function test(a: unknown): void {
    console.log(a instanceof Object);
    console.log(a instanceof Function);
    console.log(a instanceof Array);
    console.log(a instanceof HTMLElement);
}
