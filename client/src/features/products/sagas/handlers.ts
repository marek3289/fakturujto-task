import { SagaIterator } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { setProducts, setError } from '../slice'
import { fetchProducts } from './requests'

export function* handleGetProducts(): SagaIterator {
  try {
    const response = yield call(fetchProducts)
    const { data } = response

    if (data.status === 'success') {
      yield put(setProducts(data.products))
    } else {
      yield put(setError("Something went wrong..."))
    }
    
  } catch (error) {
    yield put(setError("Something went wrong..."))
  }
}

