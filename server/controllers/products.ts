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

export default { getProducts }
