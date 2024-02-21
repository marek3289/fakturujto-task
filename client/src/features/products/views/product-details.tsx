import { Link, useParams } from 'react-router-dom'

import { useAppSelector } from '@/hooks'
import { selectProductBySlug } from '../slice'

export default function ProductDetails() {
  const { slug = '' } = useParams()
  const product = useAppSelector(state => selectProductBySlug(state, slug))

  if (!product) {
    return <div>Product not found</div>
  }

  const { coverImg, name, description, price, quantity, productionDate, category } = product

  return (
    <article className='bg-white'>
      <div className='container mx-auto py-16 px-4 max-w-[1200px]'>
        {/* Breadcrumbs component */}
        <nav className='flex'>
          <ol role='list' className='flex items-center'>
            <li className='text-left'>
              <div className='-m-1'>
                <Link to='/' className='rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800'> Home </Link>
              </div>
            </li>

            <li className='text-left'>
              <div className='flex items-center'>
                <span className='mx-2 text-gray-400'>/</span>
                <div className='-m-1'>
                  <Link to='/products' className='rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800'> Products </Link>
                </div>
              </div>
            </li>

            <li className='text-left'>
              <div className='flex items-center'>
                <span className='mx-2 text-gray-400'>/</span>
                <div className='-m-1'>
                  <span className='rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800' aria-current='page'> {name} </span>
                </div>
              </div>
            </li>
          </ol>
        </nav>

        <div className='lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16'>
          <div className='lg:col-span-3 lg:row-end-1'>
            <div className='max-w-xl overflow-hidden rounded-lg'>
              <img className='h-full w-full max-w-full object-cover' src={coverImg} alt='' />
            </div>
          </div>

          <div className='lg:col-span-2 lg:row-span-2 lg:row-end-2'>
            <h1 className='sm: text-2xl font-bold text-gray-900 sm:text-3xl'>{name}</h1>

            <div className='mt-5 flex items-center'>
              <div className='flex items-center'>
                <svg className='block h-4 w-4 align-middle text-yellow-500' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' className=''></path>
                </svg>
                <svg className='block h-4 w-4 align-middle text-yellow-500' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' className=''></path>
                </svg>
                <svg className='block h-4 w-4 align-middle text-yellow-500' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' className=''></path>
                </svg>
                <svg className='block h-4 w-4 align-middle text-yellow-500' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' className=''></path>
                </svg>
                <svg className='block h-4 w-4 align-middle text-yellow-500' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' className=''></path>
                </svg>
              </div>
              <p className='ml-2 text-sm font-medium text-gray-500'>1,209 Reviews</p>
            </div>

            <h2 className='mt-8 text-base text-gray-900'>Type</h2>
            <div className='mt-3 flex select-none flex-wrap items-center gap-1'>
              <label className=''>
                <input type='radio' name='type' value='One' className='peer sr-only' checked />
                <p className='peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold'>One</p>
              </label>
              <label className=''>
                <input type='radio' name='type' value='Two' className='peer sr-only' />
                <p className='peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold'>Two</p>
              </label>
              <label className=''>
                <input type='radio' name='type' value='Three' className='peer sr-only' />
                <p className='peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold'>Three</p>
              </label>
            </div>

            <dl>
              <dt className='mt-4 text-base text-gray-900'>Product description:</dt>
              <dd className='mt-1 text-gray-500'>{description}</dd>

              <dt className='mt-4 text-base text-gray-900'>Category:</dt>
              <dd className='mt-1 text-gray-500'>{category}</dd>

              <dt className='mt-8 text-base text-gray-900'>Quantity</dt>
              <dd className='mt-1 text-gray-500'>{quantity}</dd>


              <dt className='mt-8 text-base text-gray-900'>Production date</dt>
              <dd className='mt-1 text-gray-500'>{new Date(productionDate).toLocaleDateString('pl-PL')}</dd>
            </dl>

            <div className='mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0'>
              <h2 className='text-3xl font-bold'>{price}</h2>

              <button type='button' className='inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800'>
                <svg xmlns='http://www.w3.org/2000/svg' className='shrink-0 mr-3 h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'>
                  <path stroke-linecap='round' stroke-linejoin='round' d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' />
                </svg>
                Add to cart
              </button>
            </div>

            <ul className='mt-8 space-y-2'>
              <li className='flex items-center text-left text-sm font-medium text-gray-600'>
                <svg className='mr-2 block h-5 w-5 align-middle text-gray-500' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' className=''></path>
                </svg>
                Free shipping worldwide
              </li>

              <li className='flex items-center text-left text-sm font-medium text-gray-600'>
                <svg className='mr-2 block h-5 w-5 align-middle text-gray-500' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' className=''></path>
                </svg>
                Cancel Anytime
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}
