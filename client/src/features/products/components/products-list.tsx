
import { useEffect } from 'react'

import { useAppSelector, useAppDispatch } from '@/hooks'
import { getProducts, selectProducts, selectIsLoading, selectIsError, selectErrorMessage } from '../slice'
import SingleProduct from './single-product'
import type { IProduct } from '../types'

export default function ProductsList() {
  const products: IProduct[] = useAppSelector(selectProducts)
  const isLoading = useAppSelector(selectIsLoading)
  const isError = useAppSelector(selectIsError)
  const errorMessage = useAppSelector(selectErrorMessage)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  if (isLoading) {
    return <p className='text-center'>Loading products...</p>
  }

  if (isError) {
    return <p className='text-center text-red-500'>{errorMessage}</p>
  }

  return (
    <>
      {products.length > 0 ? (
         <ul className='products-wrapper w-full'>
           {products.map((product: IProduct) => (
             <SingleProduct key={product.id} {...product} />
           ))}
         </ul>
        ) : (
          <p>Product list is empty</p>
        )}
    </>
  )
}
