export function test(constructor: new () => unknown): unknown {
    return new constructor();
}
