import { Categories } from "./Categories"

export type AdditionalInfo = {
  weight: string
  dimensions: string
  material: string
  other: string
  size: string
}

export type UserReviews = {
  id: number
  name: string
  avatar: string
  date: string
  rating: number
  content: string
}[] | null

export type Product = {
  id: string
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
  reviews: UserReviews
  relatedProducts: Product[] | null
  tags: string[] | null
}