import { Product } from '@/types/Product';

export const getProducts = async (query?: string): Promise<Product[]> => {
	const response = await fetch(process.env.API_BASE_URL + '/api/products?query=' + query);
	return response.json();
};

export const getProduct = async (productName: string): Promise<Product> => {
	const response = await fetch(
		process.env.API_BASE_URL + '/api/products/' + productName
	);
	return response.json();
};
