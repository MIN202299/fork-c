// Types for file persistence service
export const FILE_COUNT_LIMIT = 100
export const OUTPUTS_SUBDIR = 'outputs'
export const DEFAULT_UPLOAD_CONCURRENCY = 5

export interface PersistedFile {
  relativePath: string
  content: string
  mimeType?: string
  size?: number
}

export interface TurnStartTime {
  wallTime: number
  processTime: number
}

export interface FailedPersistence {
  relativePath: string
  error: Error
}

export interface FilesPersistedEventData {
  files: PersistedFile[]
  failed: FailedPersistence[]
  turnStartTime: TurnStartTime
}
