// Context collapse service — tracks context window usage stats
export interface ContextCollapseStats {
  inputTokens: number
  outputTokens: number
  cacheReadTokens: number
  cacheWriteTokens: number
  contextWindowSize: number
  collapseCount: number
}

let stats: ContextCollapseStats = {
  inputTokens: 0,
  outputTokens: 0,
  cacheReadTokens: 0,
  cacheWriteTokens: 0,
  contextWindowSize: 200000,
  collapseCount: 0,
}

const listeners = new Set<() => void>()

export function getStats(): ContextCollapseStats {
  return stats
}

export function setStats(newStats: Partial<ContextCollapseStats>): void {
  stats = { ...stats, ...newStats }
  listeners.forEach(fn => fn())
}

export function subscribe(listener: () => void): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}
