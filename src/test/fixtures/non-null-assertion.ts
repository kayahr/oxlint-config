export class Test {
    public foo!: string;
}

export function test(): void {
    document.querySelector<HTMLDivElement>(".foo")!.textContent = "";
}
