import { createSlice } from '@reduxjs/toolkit'

import { PRODUCTS } from './action-types'
import type { RootState } from '@/stores/slices'
import type { IProductSlice } from './types'

const initialProducts = [
  {
    id: 1,
    name: 'Product 1',
    slug: 'product-1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    createdAt: '2022-01-01',
    editedAt: '2022-01-02',
    coverImg: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    price: '$10.99',
    quantity: 10,
    productionDate: '2022-01-01',
    category: 'smartphones'
  },
  {
    id: 2,
    name: 'Product 2',
    slug: 'product-2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    createdAt: '2022-01-03',
    editedAt: '2022-01-04',
    coverImg: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    price: '$15.99',
    quantity: 20,
    productionDate: '2022-01-03',
    category: 'laptops'
  },
  {
    id: 3,
    name: 'Product 3',
    slug: 'product-3',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    createdAt: '2022-01-05',
    editedAt: '2022-01-06',
    coverImg: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    price: '$20.99',
    quantity: 15,
    productionDate: '2022-01-05',
    category: 'displays'
  },
  {
    id: 4,
    name: 'Product 4',
    slug: 'product-4',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    createdAt: '2022-01-07',
    editedAt: '2022-01-08',
    coverImg: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    price: '$25.99',
    quantity: 5,
    productionDate: '2022-01-07',
    category: 'smartphones'
  }
]


const initialState: IProductSlice = {
  products: initialProducts,
  status: 'idle',
  error: null
}

const productsSlice = createSlice({
  name: PRODUCTS,
  initialState,
  reducers: {}
})

export const selectProducts = (state: RootState) => state.products.products

export default productsSlice.reducer
