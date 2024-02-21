import { SagaIterator } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { setProducts, setError } from '../slice'
import { fetchProducts, deleteProductById } from './requests'

export function* handleGetProducts(): SagaIterator {
  try {
    const { data } = yield call(fetchProducts)

    if (data.status === 'success') {
      yield put(setProducts(data.products))
    } else {
      yield put(setError('Something went wrong...'))
    }
    
  } catch (error) {
    yield put(setError('Something went wrong...'))
  }
}

// @Todo Add notification from data.message
export function* handleDeleteProduct(productId: string): SagaIterator {
  try {
    const { data } = yield call(deleteProductById, productId)

    if (data.status === 'success') {
      console.log('Success')
    } else {
      yield put(setError('Error deleting the product'))
    }
  } catch (error) {
    console.log('error', error)
    yield put(setError('Error deleting the product'))
  }
}

// @Todo Add validation and notification
export function* createProductSaga(newProduct: any) {
  try {
    const { data } = yield call(deleteProductById, newProduct)

    if (data.status === 'success') {
      // console.log('Success')
      // const product = yield call(Api.createProduct, action.payload);
    } else {
      yield put(setError('Error adding the product'))
    }
  } catch (error) {
    yield put(setError('Error adding the product'))
  }
}
