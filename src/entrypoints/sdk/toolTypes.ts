// SDK tool types — all marked @internal until SDK API stabilizes
/** @internal */
export type SDKTool = {
  name: string
  description: string
  inputSchema: Record<string, unknown>
}

/** @internal */
export type SDKToolResult = {
  content: Array<{ type: string; text?: string }>
  isError?: boolean
}
