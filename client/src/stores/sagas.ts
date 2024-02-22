import { takeEvery } from 'redux-saga/effects'
import Axios, { AxiosRequestConfig } from 'axios'

import { handleGetProducts, handleDeleteProduct, handleCreateProduct } from '@/features/products/sagas/handlers'
import { getProducts, deleteProduct, createProduct } from '@/features/products/slice'

export const callAPI = async ({ url, method, data }: AxiosRequestConfig) => {
  return await Axios({ url, method, data })
}

export default function* rootSaga() {
  yield takeEvery(getProducts.type, handleGetProducts)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  yield takeEvery(createProduct.type, (action: any) => handleCreateProduct(action.payload))
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  yield takeEvery(deleteProduct.type, (action: any) => handleDeleteProduct(action.payload))
}
