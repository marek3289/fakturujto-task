import { createSlice } from '@reduxjs/toolkit'

import { SNACKBAR } from './action-types'
import type { RootState } from '@/stores/slices'
import type { SnackbarSliceState } from './types'

const initialState: SnackbarSliceState = {
  isOpen: false,
  message: null,
  status: null,
}

const snackbarSlice = createSlice({
  name: SNACKBAR,
  initialState,
  reducers: {
    openSnackbar: (state, action) => {
      state.isOpen = true
      state.message = action.payload.message
      state.status = action.payload.status
    },
    closeSnackbar: () => { 
      return { ...initialState }
     },
  },
})

export const selectIsSnackbarOpen = (state: RootState) => state.snackbar.isOpen
export const selectSnackbarMessage = (state: RootState) => state.snackbar.message
export const selectSnackbarStatus = (state: RootState) => state.snackbar.status

export const { openSnackbar, closeSnackbar } = snackbarSlice.actions

export default snackbarSlice.reducer