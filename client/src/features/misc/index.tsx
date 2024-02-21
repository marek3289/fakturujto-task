import { Link } from 'react-router-dom'

import { Head } from '@/components'

export default function Home() {  
  return (
    <>
      <Head description='Fakturuj - Zadanie rekrutacyjne' />
      <div className='bg-black h-[100vh] w-screen flex justify-center items-center'>
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className='mb-16 text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl'>
            <span className='block'>Fakturuj - Zadanie rekrutacyjne</span>
          </h2>

          <Link to='/products' className='btn-primary'>Go to products page</Link>
        </div>
      </div>
    </>
  )
}
