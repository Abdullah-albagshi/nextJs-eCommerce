import ProductCard from '@/components/ProductCard/ProductCard';
import { getProducts } from '@/services/Products';

type Params = {
	category: string;
};

export default async function page({ params }: { params: Params }) {
	const { category } = params;
  const products = await getProducts().then((res) => res.filter((product) => product.category === category));
  if (!products.length) {
    return <div className='px-3'>Product not found</div>;
  }
	return (
		<section id={category} className='flex-1 w-full mx-auto basis-full center'>
			<ul className='flex flex-wrap'>
				{products.map((product) => (
					<ProductCard product={product} className='w-1/2 md:w-1/3 lg:w-1/4' />
				))}
			</ul>
		</section>
	);
}
