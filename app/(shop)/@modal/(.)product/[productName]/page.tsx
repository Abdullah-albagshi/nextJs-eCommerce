import { ProductModal } from "@/components/ProductModal/ProductModal";
import { getProduct } from "@/services/Products";

type Params = {
  productName: string;
};

export default async function page({ params }: { params: Params }) {
  const { productName } = params;
  const product = await getProduct(productName);

  return <ProductModal product={product} />;
}