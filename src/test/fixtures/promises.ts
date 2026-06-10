export function returnVoid(): Promise<void> {
    return Promise.resolve();
}

export async function callReturnVoid(): Promise<void> {
    await returnVoid();
}

export async function callVoidCallback(callback: () => Promise<void>): Promise<void> {
    await callback();
}
