// Cached microcompact — handles cached context compression state
import type { Message } from '../../types/message.js'

export interface CachedMCState {
  pinned: PinnedCacheEdits[]
  edits: CacheEditsBlock[]
}

export interface CacheEditsBlock {
  type: 'cache_edits'
  tool_use_id: string
  content: string
}

export interface PinnedCacheEdits {
  tool_use_id: string
  content: string
}

export function createCachedMCState(): CachedMCState {
  return { pinned: [], edits: [] }
}

export function resetCachedMCState(state: CachedMCState): void {
  state.pinned = []
  state.edits = []
}

export function createCacheEditsBlock(
  _state: CachedMCState,
  _toolsToDelete: string[],
): CacheEditsBlock {
  return { type: 'cache_edits', tool_use_id: '', content: '' }
}

export async function cachedMicrocompact(
  messages: Message[],
  _querySource: string,
): Promise<Message[]> {
  return messages
}
