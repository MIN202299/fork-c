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

const _store = new SandboxViolationStore()

export class SandboxManager {
  // Platform check — always false (sandbox not available in stub)
  static isSupportedPlatform(): boolean { return false }

  // Dependency check
  static async checkDependencies(_opts?: unknown): Promise<{ available: boolean; missing: string[] }> {
    return { available: false, missing: ['sandbox-runtime'] }
  }

  // Lifecycle
  static async initialize(_config: SandboxRuntimeConfig, callback: () => Promise<void>): Promise<void> {
    await callback()
  }
  static updateConfig(_config: SandboxRuntimeConfig): void {}
  static async reset(): Promise<void> {}
  static async cleanupAfterCommand(): Promise<void> {}
  static async waitForNetworkInitialization(): Promise<void> {}

  // Command wrapping — passthrough, no sandbox
  static async wrapWithSandbox<T>(fn: () => Promise<T>): Promise<T> { return fn() }

  // Stderr annotation — passthrough
  static annotateStderrWithSandboxFailures(_command: string, stderr: string): string { return stderr }

  // Config getters — all return undefined/null (sandbox disabled)
  static getFsReadConfig(): FsReadRestrictionConfig | undefined { return undefined }
  static getFsWriteConfig(): FsWriteRestrictionConfig | undefined { return undefined }
  static getNetworkRestrictionConfig(): NetworkRestrictionConfig | undefined { return undefined }
  static getIgnoreViolations(): IgnoreViolationsConfig | undefined { return undefined }
  static getAllowUnixSockets(): boolean { return true }
  static getAllowLocalBinding(): boolean { return true }
  static getEnableWeakerNestedSandbox(): boolean { return false }
  static getProxyPort(): number | undefined { return undefined }
  static getSocksProxyPort(): number | undefined { return undefined }
  static getLinuxHttpSocketPath(): string | undefined { return undefined }
  static getLinuxSocksSocketPath(): string | undefined { return undefined }
  static getSandboxViolationStore(): SandboxViolationStore { return _store }

  // Instance (unused in practice when isSupportedPlatform returns false)
  constructor(_config: SandboxRuntimeConfig) {}
  async start(): Promise<void> {}
  async stop(): Promise<void> {}
  getViolationStore(): SandboxViolationStore { return _store }
}
