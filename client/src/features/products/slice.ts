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
  reducers: {}
})

export const selectCount = (state: RootState) => state.products.products

export default productsSlice.reducer
