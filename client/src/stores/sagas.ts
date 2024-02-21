import { takeEvery } from 'redux-saga/effects'
import Axios, { AxiosRequestConfig } from 'axios'

import { handleGetProducts } from '@/features/products/sagas/handlers'
import { getProducts } from '@/features/products/slice'

export const callAPI = async ({ url, method, data }: AxiosRequestConfig) => {
  return await Axios({ url, method, data })
}

export default function* rootSaga() {
  yield takeEvery(getProducts.type, handleGetProducts)
}
