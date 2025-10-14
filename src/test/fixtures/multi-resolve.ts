export function test(): Promise<string | null> {
    return new Promise<string | null>(resolve => {
        const timeout = setTimeout(() => resolve(null), 100);
        // Rule "promise/no-multiple-resolved" disabled because it reports a wrong
        clearTimeout(timeout);
        resolve("test");
    });
}
