import { Link } from 'react-router-dom'
import { AddProductForm } from '../components'

const AddProduct = () => {
  return (
    <div className='container mx-auto py-16 px-4 max-w-[1200px] flex flex-col items-center'>
      {/* Breadcrumbs component */}
      <nav className='flex mb-16'>
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
                <span className='rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800' aria-current='page'> Add Product </span>
              </div>
            </div>
          </li>
        </ol>
      </nav>

      <div className='relative flex w-full max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'>
        <div className='relative grid px-4 py-8 m-0 overflow-hidden text-center text-white bg-gray-900 place-items-center rounded-xl bg-clip-border shadow-gray-900/20'>
          <div className='h-20 p-6 mb-4 text-white'>
            <svg viewBox="0 0 24 24" fill="currentColor" height="32px" width="32px">
              <path d="M12 19.5 A1.5 1.5 0 0 1 10.5 21 A1.5 1.5 0 0 1 9 19.5 A1.5 1.5 0 0 1 12 19.5 z" />
              <path d="M19 19.5 A1.5 1.5 0 0 1 17.5 21 A1.5 1.5 0 0 1 16 19.5 A1.5 1.5 0 0 1 19 19.5 z" />
              <path d="M13 13h2v-2.99h2.99v-2H15V5.03h-2v2.98h-2.99v2H13V13z" />
              <path d="M10 17h8a1 1 0 00.93-.64L21.76 9h-2.14l-2.31 6h-6.64L6.18 4.23A2 2 0 004.33 3H2v2h2.33l4.75 11.38A1 1 0 0010 17z" />
            </svg>
          </div>
          <h1 className='block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-white'>
            Add new product
          </h1>
        </div>

        <AddProductForm />
      </div>
    </div>
  )
}

export default AddProduct
