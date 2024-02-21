import { all } from 'redux-saga/effects'
import Axios, { AxiosRequestConfig } from 'axios'

// import { handleGetProducts } from '@/features/products/saga'
// import { getProducts } from '@/features/products/slice'
// yield takeEvery(getProducts.type, handleGetProducts);

export const callAPI = async ({ url, method, data }: AxiosRequestConfig) => {
  return await Axios({ url, method, data })
}

export default function* rootSaga() {
  yield all([])
}
