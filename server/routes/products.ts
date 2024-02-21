import { Router } from 'express'

import { productsController } from '../controllers'

const router = Router()

router.get('/', productsController.getProducts)

export default router

