export function test<T extends any[]>(...params: T): T {
    console.log(params);
    return params;
}
