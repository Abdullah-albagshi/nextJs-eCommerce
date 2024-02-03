import { Products } from "@/data/Products";

export async function GET(request: Request, { params }: { params: { productName: string }}) {
    const productName = params.productName;
    const product = Products.find(product => product.slug === productName);
    // a 500ms delay to simulate a real API call
    await new Promise(resolve => setTimeout(resolve, 500));
    return Response.json(product);
}