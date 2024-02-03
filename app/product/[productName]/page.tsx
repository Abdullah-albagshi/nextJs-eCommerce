import { AddProductToCart } from '@/components/ProductSummary/AddProductToCart';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ProductCarousel from '@/components/ProductCarousel/ProductCarousel';
import ProductSummary from '@/components/ProductSummary/ProductSummary';
import { ProductSummaryDescription } from '@/components/ProductSummary/ProductSummaryDescription';
import { ProductSummaryName } from '@/components/ProductSummary/ProductSummaryName';
import { ProductSummaryPrice } from '@/components/ProductSummary/ProductSummaryPrice';
import { ProductSummaryRating } from '@/components/ProductSummary/ProductSummaryRating';
import SocialMedia from '@/components/SocialMedia/SocialMedia';
import { getProduct } from '@/services/Products';

type Params = {
  productName: string;
};

export default async function Page({ params }: { params: Params }) {
  const product = await getProduct(params.productName);
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <section className='flex-1 mx-auto basis-full center'>
      <section className='lg:bg-ecm-gray-lightest'>
      <div className="hidden sm:block py-5 mx-auto ecm-max-width !px-8">
        <Breadcrumb product={product} />
      </div>
      <div className='flex flex-col lg:flex-row mx-auto ecm-max-width  !px-0 lg:!px-8'>
        <div className='lg:max-w-[650px] '>
          <ProductCarousel product={product} className='flex flex-col-reverse lg:flex-row'>
            <ProductCarousel.CarouselThumbs images={product.images} />
            <ProductCarousel.CarouselDots className='lg:hidden z-[30] p-0 m-0 md:justify-center [&>div]:static [&>div]:p-3' />
          </ProductCarousel>
        </div>
        <div className="px-4 pt-10 lg:pt-0 lg:ps-20 lg:min-w-[25rem] lg:w-[40%] flex flex-col justify-start gap-4">
          <ProductSummary product={product}>
            <ProductSummaryName />
            <ProductSummaryPrice />
            <ProductSummaryDescription />
            <ProductSummaryRating />
            <AddProductToCart />
            <SocialMedia />
          </ProductSummary>
        </div>
      </div>
      </section>
      {/* tabs -> description additional information and reviews */}
      <section>
        
      </section>
      {/* sku, category, tags */}
      <section></section>
      {/* related products */}
      <section></section>
    </section>
  );
}
