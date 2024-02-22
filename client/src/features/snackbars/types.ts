import type { SNACKBAR_STATUS } from './constants'

export type SnackbarMessageType = keyof typeof SNACKBAR_STATUS

export interface SnackbarSliceState {
  isOpen: boolean
  message: string | null
  status: SnackbarMessageType | null
}
