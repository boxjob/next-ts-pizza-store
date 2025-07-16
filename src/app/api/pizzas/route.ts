import { getAllProducts } from "@/lib/services/product";
import { NextResponse } from "next/server";

export async function GET() {
    const pizzas = await getAllProducts()
    return NextResponse.json({ pizzas })
}