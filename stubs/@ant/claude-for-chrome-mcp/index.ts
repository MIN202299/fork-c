// Stub for @ant/claude-for-chrome-mcp — internal Anthropic package
export type PermissionMode = 'ask' | 'skip_all_permission_checks' | 'follow_a_plan'

export interface Logger {
  silly(message: string, ...args: unknown[]): void
  debug(message: string, ...args: unknown[]): void
  info(message: string, ...args: unknown[]): void
  warn(message: string, ...args: unknown[]): void
  error(message: string, ...args: unknown[]): void
}

export interface ClaudeForChromeContext {
  serverName: string
  logger: Logger
  socketPath: string
  getSocketPaths: () => string[]
  clientTypeId: string
  onAuthenticationError?: () => void
  onToolCallDisconnected?: () => string
  onExtensionPaired?: (deviceId: string, name: string) => void
  getPersistedDeviceId?: () => string | undefined
  bridgeConfig?: {
    url: string
    getUserId: () => Promise<string | undefined>
    getOAuthToken: () => Promise<string>
    devUserId?: string
  }
  initialPermissionMode?: PermissionMode
  callAnthropicMessages?: (req: unknown) => Promise<unknown>
  trackEvent?: (eventName: string, metadata?: Record<string, unknown>) => void
}

export const BROWSER_TOOLS: Array<{ name: string; description: string }> = []

export function createClaudeForChromeMcpServer(_context: ClaudeForChromeContext): {
  connect: (transport: unknown) => Promise<void>
} {
  return {
    connect: async (_transport: unknown) => {
      throw new Error('Claude in Chrome MCP stub: not implemented')
    },
  }
}
