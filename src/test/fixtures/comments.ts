/**
 * Line 1 capitalized
 * continuing line 2.
 *
 * first line in paragraph.
 */
export function test(): void {}

// Line 1 capitalized
// continuing on line 2.
export function test2(): void {}

// oxlint-disable-next-line capitalized-comments
// line 1 not-capitalized
export function test3(): void {}

// oxlint-disable-next-line capitalized-comments
/* line 1 not-capitalized */
export function test4(): void {}

// cspell:disable-next-line
export function jshdfkjsdhfkjs(): void {}

/* node:coverage ignore next 2 */
export function test5(): void {}
