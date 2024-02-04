import { Products } from '@/data/Products';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const query = searchParams.get('query');
  // a delay to simulate a real API call
	await new Promise((resolve) => setTimeout(resolve, 500));

  if (query) {
    const filteredProducts = Products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
    return new Response(JSON.stringify(filteredProducts));
  }
	return Response.json(Products);
}
