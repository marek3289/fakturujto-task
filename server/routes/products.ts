import { Router } from 'express'

import { productsController } from '../controllers'

const router = Router()

router.get('/', productsController.getProducts)
router.delete('/:id', productsController.deleteProduct)

export default router

