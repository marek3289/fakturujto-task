import { Action, combineReducers, Reducer } from 'redux'
import storage from 'redux-persist/lib/storage'

import productsReducer from '@/features/products/slice'
import snackbarReducer from '@/features/snackbars/slice'
import { resetStore } from './helpers'

const appReducer = combineReducers({
  products: productsReducer,
  snackbar: snackbarReducer,
})

const rootReducer: Reducer = (state: RootState, action: Action) => {
  if (action.type === resetStore.toString()) {
    storage.removeItem('persist:root')
    const { snackbar } = state
    state = { snackbar } as RootState
  }
  return appReducer(state, action)
}

export default rootReducer

export type RootState = ReturnType<typeof appReducer>
