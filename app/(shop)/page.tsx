import { Product } from "@/types/Product";
import ProductCard from "@/components/ProductCard/ProductCard";

export default async function page() {
  const products:Product[] = await fetch('http://localhost:3000/api/products').then((res) => res.json());
  return (
    <section className="flex-1 w-full mx-auto basis-full center" id="all">
			<ul className='flex flex-wrap'>
				{products.map((product) => (
					<ProductCard product={product} className='w-1/2 md:w-1/3 lg:w-1/4' key={`product-${product.id}`} />
				))}
			</ul>
    </section>
  );
}