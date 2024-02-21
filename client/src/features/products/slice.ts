import { createSlice } from '@reduxjs/toolkit'

import { PRODUCTS } from './action-types'
import type { RootState } from '@/stores/slices'
import type { IProductSlice } from './types'

const initialState: IProductSlice = {
  products: [],
  status: 'idle',
  error: null
}

const productsSlice = createSlice({
  name: PRODUCTS,
  initialState,
  reducers: {
    getProducts: (state) => {
      return { ...state, status: 'loading' }
    },
    setProducts: (state, action) => {
      return { ...state, error: null, status: 'success', products: action.payload }
    },
    setError: (state, action) => {
      return { ...state, error: action.payload, status: 'failure' }
    }
  }
})

export const selectProducts = (state: RootState) => state.products.products

export const selectIsError = (state: RootState) => state.products.status === 'failure'
export const selectErrorMessage = (state: RootState) => state.products.error
export const selectIsLoading = (state: RootState) =>
  state.products.status === 'loading' || state.products.status === 'idle'

export const { getProducts, setProducts, setError } = productsSlice.actions

export default productsSlice.reducer
