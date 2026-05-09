// Stub for @ant/computer-use-mcp/types
export type CoordinateMode = 'pixels' | 'percent'

export interface CuSubGates {
  pixelValidation: boolean
  clipboardPasteMultiline: boolean
  mouseAnimation: boolean
  hideBeforeAction: boolean
  autoTargetDisplay: boolean
  clipboardGuard: boolean
}

export interface ScreenshotDims {
  width: number
  height: number
}

export interface CuPermissionRequest {
  type: string
  tool: string
  args: Record<string, unknown>
}

export interface CuPermissionResponse {
  granted: boolean
  reason?: string
}

export const DEFAULT_GRANT_FLAGS: Record<string, boolean> = {}
