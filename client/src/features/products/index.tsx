import { Link } from 'react-router-dom'

import { useAppSelector } from '@/hooks'
import { SingleProduct } from './components'
import { selectProducts } from './slice'
import type { IProduct } from './types'

export default function Products() {
  const productsList: IProduct[] = useAppSelector(selectProducts)

  return (
    <div className='max-w-[1400px] mx-auto p-4 flex flex-col justify-center items-center'>
      <div className='mb-16 w-full flex items-center justify-around'>
        <h1 className='text-2xl font-bold'>Products</h1>
        <Link to='/products/add' className='btn-primary'>Add new product</Link>
      </div>
      
      {productsList.length > 0 ? (
         <ul className='products-wrapper w-full'>
           {productsList.map((product: IProduct) => (
             <SingleProduct key={product.id} {...product} />
           ))}
         </ul>
        ) : (
          <p>Product list is empty</p>
        )}
    </div>
  )
}

