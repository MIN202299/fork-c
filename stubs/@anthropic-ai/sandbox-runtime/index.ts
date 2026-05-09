// Stub for @anthropic-ai/sandbox-runtime
import { z } from 'zod'

export interface FsReadRestrictionConfig { paths: string[] }
export interface FsWriteRestrictionConfig { paths: string[] }
export interface IgnoreViolationsConfig { all?: boolean }
export interface NetworkHostPattern { host: string; port?: number }
export interface NetworkRestrictionConfig { allowedHosts?: NetworkHostPattern[] }
export type SandboxAskCallback = (event: unknown) => Promise<boolean>
export type SandboxDependencyCheck = () => Promise<{ available: boolean; missing: string[] }>
export interface SandboxRuntimeConfig {
  fsRead?: FsReadRestrictionConfig
  fsWrite?: FsWriteRestrictionConfig
  network?: NetworkRestrictionConfig
  ignoreViolations?: IgnoreViolationsConfig
}
export interface SandboxViolationEvent {
  type: string
  path?: string
  host?: string
  timestamp: number
}

export const SandboxRuntimeConfigSchema = z.object({
  fsRead: z.object({ paths: z.array(z.string()) }).optional(),
  fsWrite: z.object({ paths: z.array(z.string()) }).optional(),
  network: z.object({ allowedHosts: z.array(z.object({ host: z.string(), port: z.number().optional() })).optional() }).optional(),
  ignoreViolations: z.object({ all: z.boolean().optional() }).optional(),
})

export class SandboxViolationStore {
  private violations: SandboxViolationEvent[] = []
  add(event: SandboxViolationEvent): void { this.violations.push(event) }
  getAll(): SandboxViolationEvent[] { return [...this.violations] }
  clear(): void { this.violations = [] }
}

export class SandboxManager {
  static isSupportedPlatform(): boolean { return false }
  constructor(_config: SandboxRuntimeConfig) {}
  async start(): Promise<void> { throw new Error('sandbox-runtime stub: not implemented') }
  async stop(): Promise<void> {}
  async checkDependencies(): Promise<{ available: boolean; missing: string[] }> {
    return { available: false, missing: ['sandbox-runtime'] }
  }
  getViolationStore(): SandboxViolationStore { return new SandboxViolationStore() }
}
