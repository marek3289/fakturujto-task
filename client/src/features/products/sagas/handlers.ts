import { SagaIterator } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { setProducts, setError } from '../slice'
import { fetchProducts, createNewProduct, deleteProductById } from './requests'
import { openSnackbar } from '../../snackbars/slice'

export function* handleGetProducts(): SagaIterator {
  try {
    const { data } = yield call(fetchProducts)

    if (data.status === 'success') {
      yield put(setProducts(data.products))
      yield put(openSnackbar({ message: 'Products fetched successfully', status: 'success' }))
    } else {
      yield put(setError('Something went wrong...'))
      yield put(openSnackbar({ message: 'Failed to fetch products', status: 'error' }))
    }
    
  } catch (error) {
    yield put(setError('Something went wrong...'))
    yield put(openSnackbar({ message: 'Failed to fetch products', status: 'error' }))
  }
}

// @Todo Add notification from data.message
export function* handleDeleteProduct(productId: string): SagaIterator {
  try {
    const { data } = yield call(deleteProductById, productId)

    if (data.status === 'success') {
      console.log('Success')
      yield put(openSnackbar({ message: 'Product deleted successfully', status: 'success' }))
    } else {
      yield put(setError('Error deleting the product'))
      yield put(openSnackbar({ message: 'Failed to delete product', status: 'error' }))
    }
  } catch (error) {
    console.log('error', error)
    yield put(setError('Error deleting the product'))
    yield put(openSnackbar({ message: 'Failed to delete product', status: 'error' }))
  }
}

// @Todo Add validation and notification
export function* handleCreateProduct(values: any) {
  try {
    const { data } = yield call(createNewProduct, values)

    if (data.status === 'success') {
      // console.log('Success')
      // const product = yield call(Api.createProduct, action.payload);
      yield put(openSnackbar({ message: 'Product created successfully', status: 'success' }))
    } else {
      yield put(setError('Error adding the product'))
      yield put(openSnackbar({ message: 'Failed to add product', status: 'error' }))
    }
  } catch (error) {
    yield put(setError('Error adding the product'))
    yield put(openSnackbar({ message: 'Failed to add product', status: 'error' }))
  }
}
