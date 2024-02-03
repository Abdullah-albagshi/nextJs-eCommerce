import { Categories } from "./Categories"

export type AdditionalInfo = {
  weight: string
  dimensions: string
  material: string
  other: string
  size: string
}

export type Product = {
  id: number
  name: string
  slug: string
  price: number
  discount: number | null
  colors: {
    colorHash: string
    colorName: string
  }[] | null
  images: string[]
  thumbnails: string[]; 
  quantity: number
  description: string
  category: Categories
  additionalInfo: AdditionalInfo
  serialNumber: string
  rating: number | null
  reviews: {
    id: number
    name: string
    avatar: string
    date: string
    rating: number
    content: string
  }[] | null
  relatedProducts: Product[] | null
  tags: string[] | null
}