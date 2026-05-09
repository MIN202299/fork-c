// Stub for @anthropic-ai/mcpb — internal Anthropic MCP bundle package
export interface McpbManifest {
  name: string
  version: string
  description?: string
  tools?: Array<{
    name: string
    description: string
    inputSchema: Record<string, unknown>
  }>
  userConfiguration?: McpbUserConfigurationOption[]
}

export interface McpbUserConfigurationOption {
  key: string
  label: string
  description?: string
  type: 'string' | 'number' | 'boolean' | 'array'
  required?: boolean
  default?: unknown
}

export async function getMcpConfigForManifest(
  _manifest: McpbManifest,
  _options: unknown,
): Promise<Record<string, unknown>> {
  throw new Error('@anthropic-ai/mcpb stub: getMcpConfigForManifest not implemented')
}
