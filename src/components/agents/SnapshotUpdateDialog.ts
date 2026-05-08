// Stub for SnapshotUpdateDialog — agent memory snapshot update prompt
import React from 'react'

interface SnapshotUpdateDialogProps {
  agentType: string
  scope: string
  snapshotTimestamp: string
  onComplete: (result: 'merge' | 'keep' | 'replace') => void
  onCancel: () => void
}

export function SnapshotUpdateDialog(
  _props: SnapshotUpdateDialogProps,
): React.ReactElement | null {
  return null
}
