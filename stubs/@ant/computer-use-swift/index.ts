// Stub for @ant/computer-use-swift — internal Anthropic macOS-specific package
export interface ComputerUseAPI {
  screenshot(): Promise<{ data: string; width: number; height: number }>
  drainRunLoop(): Promise<void>
}
