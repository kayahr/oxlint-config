export function test(): () => number {
    return function() {
        return 1;
    }
}
