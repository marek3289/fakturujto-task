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

// function* fetchProductsSaga() {
//   try {
//     const products = yield call(Api.fetchProducts);
//     yield put({ type: ActionTypes.FETCH_PRODUCTS_SUCCESS, payload: products });
//   } catch (e) {
//     yield put({ type: ActionTypes.FETCH_PRODUCTS_FAILURE, payload: e.message });
//   }
// }

// function* createProductSaga(action) {
//   try {
//     const product = yield call(Api.createProduct, action.payload);
//     yield put({ type: ActionTypes.CREATE_PRODUCT_SUCCESS, payload: product });
//   } catch (e) {
//     yield put({ type: ActionTypes.CREATE_PRODUCT_FAILURE, payload: e.message });
//   }
// }

// function* updateProductSaga(action) {
//   try {
//     const product = yield call(Api.updateProduct, action.payload);
//     yield put({ type: ActionTypes.UPDATE_PRODUCT_SUCCESS, payload: product });
//   } catch (e) {
//     yield put({ type: ActionTypes.UPDATE_PRODUCT_FAILURE, payload: e.message });
//   }
// }
