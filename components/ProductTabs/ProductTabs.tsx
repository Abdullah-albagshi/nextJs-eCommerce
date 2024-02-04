import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'

import { Product } from '@/types/Product'
import ProductUserReviews from './ProductUserReviews'
import React from 'react'

type Props = {
  product: Product
}

const ProductTabs = ({ product }: Props) => {
  {/* tabs -> description additional information and reviews */ }
  const { additionalInfo, description, reviews } = product
  return (
    <Tabs defaultValue="description" className='pt-10 mt-5 border-t md:pt-0 md:mt-0 md:border-t-0'>
      <TabsList className='flex flex-col items-start md:flex-row '>
        <TabsTrigger value="description" className='data-[state=active]:text-ecm-black text-ecm-gray'>Description</TabsTrigger>
        <TabsTrigger value="info" className='data-[state=active]:text-ecm-black text-ecm-gray'>Additional information</TabsTrigger>
        <TabsTrigger value="reviews" className='data-[state=active]:text-ecm-black text-ecm-gray'>Reviews
          <span className=' text-ecm-yellow text-xs ml-1 relative top-[-0.625rem]'>{reviews?.length}</span></TabsTrigger>
      </TabsList>
      <section className='flex-1 mx-auto ecm-max-width md:!px-5 text-center py-8'>
        <TabsContent value="description">
          <h3 className='text-base text-ecm-gray'>
            {description}
          </h3>
        </TabsContent>
        <TabsContent value="info" className='flex justify-center w-full text-center'>
          <section className='max-w-[820px] w-full'>
            <ul>
              {
                // map over the additional info object and display the key value pairs
                Object.entries(additionalInfo).map(([key, value]) => (
                  <li key={key} className='flex pb-5'>
                    <span className='text-base capitalize md:w-1/5 pe-3 text-ecm-black text-start'>{key}:</span>
                    <span className='text-base md:w-4/5 text-ecm-gray text-start'>{value}</span>
                  </li>
                ))
              }
            </ul>
          </section>
        </TabsContent>
        <TabsContent value="reviews" className='flex justify-center w-full text-center'>
          <section className='max-w-[820px] w-full'>
            <ProductUserReviews reviews={reviews} />
          </section>
        </TabsContent>
      </section>
    </Tabs>

  )
}

export default ProductTabs