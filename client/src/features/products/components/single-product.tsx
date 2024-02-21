import { useCallback } from 'react'
import { Link } from 'react-router-dom'

import { cn } from '@/helpers/cn'

interface IProduct {
  id: number,
  name: string,
  slug: string;
  description: string,
  createdAt: string,
  editedAt: string,
  coverImg: string,
  price: string,
  quantity: number,
  productionDate: string,
  category: string
}

export default function SingleProduct({ id, name, slug, coverImg, price, category }: IProduct) {

  const handleDelete = useCallback((productId: number) => {
    console.log('remove item with id:', productId)
  }, [])

  const handleEdit = useCallback((productId: number) => {
    console.log('edit item with id:', productId)
  }, [])
  
  return (
    <li className='group relative'>
      <div className='w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
        <img src={coverImg} alt={`Cover image of ${name}`} className='h-full w-full object-cover object-center lg:h-full lg:w-full' />

        <div className={cn('hidden absolute top-4 right-4 group-hover:flex gap-2')}>
          <button className='p-2 bg-gray-300 text-white rounded-full' onClick={() => handleEdit(id)}>
            <svg viewBox='0 0 24 24' fill='currentColor' height='24px' width='24px'>
              <path d='M10 20H6V4h7v5h5v3.1l2-2V8l-6-6H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h4v-2m10.2-7c.1 0 .3.1.4.2l1.3 1.3c.2.2.2.6 0 .8l-1 1-2.1-2.1 1-1c.1-.1.2-.2.4-.2m0 3.9L14.1 23H12v-2.1l6.1-6.1 2.1 2.1z' />
            </svg>
            <span className='sr-only'>Edit product</span>
          </button>
          <button className='p-2 bg-gray-300 text-white rounded-full' onClick={() => handleDelete(id)}>
            <svg viewBox='0 0 21 21' fill='currentColor' height='24px' width='24px'>
              <g
                fill='none'
                fillRule='evenodd'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M5.5 4.5h10v12a2 2 0 01-2 2h-6a2 2 0 01-2-2zm5-2a2 2 0 011.995 1.85l.005.15h-4a2 2 0 012-2zM3.5 4.5h14M8.5 7.5v8M12.5 7.5v8' />
              </g>
            </svg>
            <span className='sr-only'>Remove product</span>
          </button>
        </div>
      </div>

      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-gray-700'>
            <Link to={`/products/${slug}`}>
              {name}
            </Link>
          </h3>
          <p className='mt-1 text-sm text-gray-500'>{category}</p>
        </div>
        <p className='text-sm font-medium text-gray-900'>{price}</p>
      </div>
    </li>
  )
}
