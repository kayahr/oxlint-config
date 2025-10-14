export function test<T extends any[]>(...params: T): void {
    console.log(params);
}
