import { Link } from 'react-router-dom'

import { ProductsList } from './components'

export default function Products() {
  return (
    <div className='max-w-[1400px] mx-auto p-4 flex flex-col justify-center items-center'>
      <div className='mb-16 w-full flex items-center justify-around'>
        <h1 className='text-2xl font-bold'>Products</h1>
        <Link to='/products/add' className='btn-primary'>Add new product</Link>
      </div>
      
      <ProductsList />
    </div>
  )
}

