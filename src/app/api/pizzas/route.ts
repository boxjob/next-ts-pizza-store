import { getAllProducts } from "@/lib/services/product";
import { NextResponse } from "next/server";

export async function GET() {
    const pizzas = await getAllProducts()
    pizzas.map(pizza => ({
            ...pizza,
            image: `${process.env.NEXT_PUBLIC_BASE_URL}/pizzas/${ pizza.image }` 
        }))
    return NextResponse.json({ pizzas })
}