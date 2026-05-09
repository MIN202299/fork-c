// Stub for snipCompact — only used when feature('HISTORY_SNIP') is enabled
import type { Message } from '../../types/message.js'

export function snipMessages(_messages: Message[], _maxTokens: number): Message[] {
  return _messages
}

export function getSnipBoundary(_messages: Message[]): number {
  return 0
}
