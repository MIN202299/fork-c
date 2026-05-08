// Runtime shim for bun:bundle — at build time Bun replaces feature() calls
// with true/false; this file is only used when running without a build step.
export function feature(_name: string): boolean {
  return false
}
