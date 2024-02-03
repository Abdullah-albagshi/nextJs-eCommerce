import { ProductCardList } from '@/components/ProductCardList/ProductCardList';
import { getProducts } from '@/services/Products';

type Params = {
	category: string;
};

export default async function page({ params }: { params: Params }) {
	const { category } = params;
  const products = await getProducts().then((res) => res.filter((product) => product.category === category));
  
	return (
		<section id={category} className='flex-1 w-full mx-auto basis-full center'>
			<ProductCardList products={products} />
		</section>
	);
}
