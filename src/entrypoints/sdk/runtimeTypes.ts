// SDK runtime types — non-serializable types (callbacks, interfaces with methods)
export type OnMessage = (message: unknown) => void | Promise<void>
export type OnResult = (result: unknown) => void | Promise<void>
export type OnError = (error: Error) => void | Promise<void>
export type AbortFn = () => void
