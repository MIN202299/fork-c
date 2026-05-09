// Generated SDK core types — auto-generated from coreSchemas.ts
// This stub provides empty type stubs for the generated types
export type SDKMessage = Record<string, unknown>
export type SDKResultMessage = Record<string, unknown>
export type SDKSessionInfo = {
  sessionId: string
  createdAt: string
}
export type SDKUserMessage = Record<string, unknown>
export type SDKSession = Record<string, unknown>
export type Options = Record<string, unknown>
export type Query = Record<string, unknown>
export type InternalOptions = Record<string, unknown>
export type InternalQuery = Record<string, unknown>
export type SessionMessage = Record<string, unknown>
export type SDKSessionOptions = Record<string, unknown>
export type ListSessionsOptions = Record<string, unknown>
export type GetSessionInfoOptions = Record<string, unknown>
export type GetSessionMessagesOptions = Record<string, unknown>
export type ForkSessionOptions = Record<string, unknown>
export type ForkSessionResult = Record<string, unknown>
export type McpSdkServerConfigWithInstance = Record<string, unknown>
export type SdkMcpToolDefinition = Record<string, unknown>
export type AnyZodRawShape = Record<string, unknown>
export type InferShape<T> = T
export type PermissionRulesBySource = Record<string, unknown>
export type PermissionRule = Record<string, unknown>

// Hook events
export const HOOK_EVENTS = [
  'PreToolUse',
  'PostToolUse',
  'PostToolUseFailure',
  'Notification',
  'UserPromptSubmit',
] as const

export type HookEvent = typeof HOOK_EVENTS[number]
