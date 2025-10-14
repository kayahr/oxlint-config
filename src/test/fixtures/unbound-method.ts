export function test(): void {
    const oldWrite = process.stdin.setRawMode;
    process.stdin.setRawMode = oldWrite;
}
