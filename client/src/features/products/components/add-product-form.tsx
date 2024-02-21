import { z, ZodError } from 'zod'
import { useFormik } from 'formik'

const productSchema = z.object({
  name: z.string().max(100).min(1),
  description: z.string().max(2000),
  price: z.number().min(0),
  quantity: z.number().min(0),
  productionDate: z.date(),
  category: z.enum(['smartphones', 'laptops', 'displays'])
})

export type Product = z.infer<typeof productSchema>

const validateForm = (values: Product) => {
	try {
		productSchema.parse(values)
	} catch (error) {
		if (error instanceof ZodError) {
			return error.formErrors.fieldErrors
		}
	}
}
const AddProductForm = () => {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      price: 0,
      quantity: 0,
      productionDate: new Date(),
      category: 'smartphones',
      description: ''
    },
    validate: validateForm,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  return (
    <form onSubmit={handleSubmit} className='p-6'>
      <div className='flex flex-col gap-6'>
        <div id='category-group' className='sr-only'>Choose category</div>
        <fieldset role='radiogroup' aria-labelledby='category-group' className='relative z-0 flex flex-row gap-2 p-1 rounded-lg bg-blue-gray-50 bg-opacity-60'>
          <legend className='block mb-2 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900 cursor-pointer'>Category</legend>
          <label htmlFor='smartphones' className='peer relative flex items-center justify-center w-full h-full px-2 py-1 font-sans text-sm font-600 antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer select-none text-blue-gray-900 bg-white rounded-md shadow'>
            <input id='smartphones' type='radio' name='category' value='smartphones' className='peer/smartphones absolute opacity-0 w-full h-full cursor-pointer' onChange={handleChange} checked={values.category === 'smartphones'} />
            <span className='peer-checked/smartphones:text-blue-500 peer-checked/smartphones:font-bold'>Smartphones</span>
          </label>
          <label htmlFor='laptops' className='peer relative flex items-center justify-center w-full h-full px-2 py-1 font-sans text-sm font-600 antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer select-none text-blue-gray-900 bg-white rounded-md shadow'>
            <input id='laptops' type='radio' name='category' value='laptops' className='peer/laptops absolute opacity-0 w-full h-full cursor-pointer' onChange={handleChange} checked={values.category === 'laptops'} />
            <span className='peer-checked/laptops:text-blue-500 peer-checked/laptops:font-bold'>Laptops</span>
          </label>
          <label htmlFor='displays' className='peer relative flex items-center justify-center w-full h-full px-2 py-1 font-sans text-sm font-600  antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer select-none text-blue-gray-900 bg-white rounded-md shadow'>
            <input id='displays' type='radio' name='category' value='displays' className='peer/displays absolute opacity-0 w-full h-full cursor-pointer' onChange={handleChange} checked={values.category === 'displays'} />
            <span className='peer-checked/displays:text-blue-500 peer-checked/displays:font-bold'>Displays</span>
          </label>
        </fieldset>

        <label className='block mb-2 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900 cursor-pointer'>
          <span className='mb-2'>Name</span>
          <input type='text' name='name' placeholder="Eg. MacBook Pro" className='peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' onChange={handleChange} value={values.name} />
          {errors.name && touched.name && <p className='text-red-500'>{errors.name}</p>}
        </label>

        <label className='block mb-2 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900 cursor-pointer'>
          <span className='mb-2'>Price</span>
          <input type='number' name='price' placeholder="Eg. 1000" min='0' className='peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' onChange={handleChange} value={values.price} />
          {errors.price && touched.price && <p className='text-red-500'>{errors.price}</p>}
        </label>

        <label className='block mb-2 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900 cursor-pointer'>
          <span className='mb-2'>Quantity</span>
          <input type='number' name='quantity' placeholder="Eg. 15" min='0' className='peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' onChange={handleChange} value={values.quantity} />
          {errors.quantity && touched.quantity && <p className='text-red-500'>{errors.quantity}</p>}
        </label>

        <label className='block mb-2 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900 cursor-pointer'>
          <span className='mb-2'>Production date</span>
          <input type='date' name='productionDate' placeholder="12.12.2012" className='peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' onChange={handleChange} value={values.productionDate} />
          {errors.productionDate && touched.productionDate && <p className='text-red-500'>{errors.productionDate}</p>}
        </label>
        
        <label className='block mb-2 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900 cursor-pointer'>
          <span className='mb-2'>Description</span>
          <textarea name='description' placeholder="Lorem ipsum dolor sit amet..." maxLength={2000} className='peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' onChange={handleChange} value={values.description} />
          {errors.description && touched.description && <p className='text-red-500'>{errors.description}</p>}
        </label>
      </div>
      <button type='submit' className='w-full mt-8 select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
        Add product
      </button>
    </form>
  )
}

export default AddProductForm


