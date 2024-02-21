import type { FetchStatusType } from '@/types'

export interface IProduct {
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

export interface IProductSlice {
  products: IProduct[]
  status: FetchStatusType
  error: string | null
}

