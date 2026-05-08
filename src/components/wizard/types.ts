// Wizard component types
export interface WizardContextValue<T = unknown> {
  step: number
  totalSteps: number
  data: T
  next: () => void
  prev: () => void
  setData: (data: Partial<T>) => void
}

export interface WizardProviderProps<T = unknown> {
  children: React.ReactNode
  initialData: T
  onComplete: (data: T) => void
}
