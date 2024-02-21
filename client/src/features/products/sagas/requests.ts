import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export function fetchProducts() {
  return axios.get(API_URL + '/api/products')
}

export function deleteProductById(productId: string) {
  return axios.delete(API_URL + '/api/products/' + productId)
}

