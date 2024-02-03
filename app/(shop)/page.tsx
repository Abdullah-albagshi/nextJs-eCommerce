// (shop) is group router and it wont effect the path
// It is the root of the website and it will display all the products

import { ProductCardList } from "@/components/ProductCardList/ProductCardList";
import { getProducts } from "@/services/Products";

export default async function page() {
  const products = await getProducts()
  return (
    <section className="flex-1 w-full mx-auto basis-full center" id="all">
			<ProductCardList products={products} />
    </section>
  );
}