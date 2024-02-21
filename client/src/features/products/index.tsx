import { Link } from 'react-router-dom'
import { SingleProduct } from './components'

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

const productsList: IProduct[] = [
  {
    id: 1,
    name: 'Product 1',
    slug: 'product-1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    createdAt: '2022-01-01',
    editedAt: '2022-01-02',
    coverImg: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    price: '$10.99',
    quantity: 10,
    productionDate: '2022-01-01',
    category: 'smartphones'
  },
  {
    id: 2,
    name: 'Product 2',
    slug: 'product-2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    createdAt: '2022-01-03',
    editedAt: '2022-01-04',
    coverImg: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    price: '$15.99',
    quantity: 20,
    productionDate: '2022-01-03',
    category: 'laptops'
  },
  {
    id: 3,
    name: 'Product 3',
    slug: 'product-3',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    createdAt: '2022-01-05',
    editedAt: '2022-01-06',
    coverImg: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    price: '$20.99',
    quantity: 15,
    productionDate: '2022-01-05',
    category: 'displays'
  },
  {
    id: 4,
    name: 'Product 4',
    slug: 'product-4',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    createdAt: '2022-01-07',
    editedAt: '2022-01-08',
    coverImg: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    price: '$25.99',
    quantity: 5,
    productionDate: '2022-01-07',
    category: 'smartphones'
  }
]

export default function Products() {
  // @TODO: Fetch product data from Redux store

  return (
    <div className='max-w-[1400px] mx-auto p-4 flex flex-col justify-center items-center'>
      <div className='mb-16 w-full flex items-center justify-around'>
        <h1 className='text-2xl font-bold'>Products</h1>
        <Link to='/products/add' className='btn-primary'>Add new product</Link>
      </div>
      
      <ul className='products-wrapper w-full'>
        {productsList.map((product: IProduct) => (
          <SingleProduct key={product.id} {...product} />
        ))}
      </ul>
    </div>
  )
}
