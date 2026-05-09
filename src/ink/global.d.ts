// Global type declarations for Ink terminal UI framework
declare global {
  // Yoga layout properties attached to Ink DOM nodes
  interface YogaNode {
    calculateLayout(width?: number, height?: number, direction?: number): void
    getComputedWidth(): number
    getComputedHeight(): number
    getComputedLeft(): number
    getComputedTop(): number
    free(): void
  }
}

export {}
