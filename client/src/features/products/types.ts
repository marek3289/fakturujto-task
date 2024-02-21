import type { FetchStatusType } from '@/types'

export interface IProductSlice {
  products: any[]
  status: FetchStatusType
  error: string | null
}
