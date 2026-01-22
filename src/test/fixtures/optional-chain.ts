export function a(error: unknown): boolean {
    // Check false positive (https://github.com/oxc-project/oxc/issues/17968)
    return error instanceof Error && (error.message === "ENOENT" || error.message === "ENOTDIR");
}
