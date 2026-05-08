// Stub for @ant/computer-use-input — internal Anthropic package
export interface ComputerUseInput {
  key(key: string): Promise<void>
  keys(keys: string[]): Promise<void>
  mouseMove(x: number, y: number): Promise<void>
  mouseClick(button: 'left' | 'right' | 'middle'): Promise<void>
  mouseScroll(dx: number, dy: number): Promise<void>
  typeText(text: string): Promise<void>
}

export interface ComputerUseInputAPI {
  isSupported: true
  input: ComputerUseInput
}

export interface ComputerUseInputUnsupported {
  isSupported: false
  reason: string
}
