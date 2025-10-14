export class Test {
    public a = 0;

    public test(): number {
        const a = this.a = 1;
        return a;
    }
}
