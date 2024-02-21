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

const createProduct = async (req: Request, res: Response) => {  
  try {
    const newProduct = await product.create(req.body);
    res.status(201).json({ status: 'success', product: newProduct });
  } catch (error) {
    throw createError(500, 'Error creating a new product');
  }
}

const editProduct = async (req: Request, res: Response) => {
  // Add logic for editing a product
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

const getSingleProduct = async (req: Request, res: Response) => {
  // Add logic for getting a single product
}

export default { getProducts, createProduct, editProduct, deleteProduct, getSingleProduct }
