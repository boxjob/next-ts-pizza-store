'use client'

import { Product } from "@/generated/prisma"
import Image from "next/image"
import { Button } from "../ui/button"
import { decimalToMoney } from "@/lib/utils"

export const PizzaItem = ({ data }: { data: Product }) => {
    const handleAddToCart = () => {}
    return (
        <div className="text-sm bg-secondary p-4 rounded-md">
            <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/pizzas/${data.image}`}
                alt={data.name}
                width={200}
                height={200}
                className="w-full mb-3"
            />
            <div className="text-lg font-bold">{data.name}</div>
            <div className="text-sm">{ decimalToMoney( data.price )}</div>
            <div className="truncate mb-3">{data.ingredients}</div>
            <div className="text-center">
                <Button onClick={handleAddToCart}>Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}
