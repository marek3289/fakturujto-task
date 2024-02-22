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
    },
    deleteProduct: (state, action) => {
      return { ...state, products: state.products.filter(product => product.id !== action.payload) }
    },
    createProduct: (state, action) => {
      return { ...state, status: 'loading', products: [...state.products, action.payload] }
    },
  },
})

export const selectProducts = (state: RootState) => state.products.products
export const selectProductBySlug = (state: RootState, slug: string) =>
  state.products.products.find(product => product.slug === slug)

export const selectIsError = (state: RootState) => state.products.status === 'failure'
export const selectErrorMessage = (state: RootState) => state.products.error
export const selectIsLoading = (state: RootState) =>
  state.products.status === 'loading' || state.products.status === 'idle'

export const { getProducts, setProducts, setError, deleteProduct, createProduct } = productsSlice.actions

export default productsSlice.reducer
