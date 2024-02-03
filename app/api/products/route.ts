import { Products } from "@/data/Products";

export async function GET(){
    // a 500ms delay to simulate a real API call
    await new Promise(resolve => setTimeout(resolve, 500));
    return new Response(JSON.stringify(Products), {
        headers: {
            "content-type": "application/json",
        },
    });
}