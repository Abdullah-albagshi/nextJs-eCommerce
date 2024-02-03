import { Products } from "@/data/Products";

export async function GET(){
    // a delay to simulate a real API call
    await new Promise(resolve => setTimeout(resolve, 500));
    return Response.json(Products);
}