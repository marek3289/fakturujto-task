import { Request, Response } from 'express'
import createError from 'http-errors'

import { product } from '../models'

const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await product.findMany()
    res.status(200).json({ status: 'success', products })
  } catch (error) {
    throw createError(500, 'Error retrieving products from database')
  }
}

// @Todo: Validate incoming data
const createProduct = async (req: Request, res: Response) => {
  const { name, price, quantity, productionDate, category, description } = req.body

  const coverImg = 'https://loremflickr.com/420/640/cats'

  try {
    const newProduct = await product.create({
      data: {
        name,
        price: `$ ${price}`,
        quantity,
        productionDate: new Date(productionDate),
        category,
        description,
        coverImg,  
        slug: name.toLowerCase().replace(/\s+/g, '-'),
        createdAt: new Date().toISOString(),
        editedAt: new Date().toISOString()
      }
    });
    res.status(201).json({ status: 'success', product: newProduct });
  } catch (error) {
    throw createError(500, 'Error creating a new product');
  }
}

const deleteProduct = async (req: Request, res: Response) => {
  try {
    await product.delete({
      where: {
        id: req.params.id,
      },
    })

    res.status(200).json({ status: 'success', message: 'Product deleted successfully' });
  } catch (error) {
    throw createError(500, 'Error deleting the product');
  }
}

export default { getProducts, createProduct, deleteProduct }
