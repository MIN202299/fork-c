// Stub for @ant/computer-use-mcp — internal Anthropic computer use package
export type {
  CoordinateMode,
  CuSubGates,
  ScreenshotDims,
  CuPermissionRequest,
  CuPermissionResponse,
} from './types.js'

export { DEFAULT_GRANT_FLAGS } from './types.js'

export interface ComputerUseSessionContext {
  sessionId: string
}

export type CuCallToolResult = {
  content: Array<{ type: string; text?: string }>
  isError?: boolean
}

export const API_RESIZE_PARAMS = {
  width: 1280,
  height: 800,
}

export function targetImageSize(_dims: { width: number; height: number }): {
  width: number
  height: number
} {
  return API_RESIZE_PARAMS
}

export function bindSessionContext(
  _context: ComputerUseSessionContext,
  _fn: unknown,
): unknown {
  return _fn
}

export function buildComputerUseTools(_options: unknown): unknown[] {
  return []
}
