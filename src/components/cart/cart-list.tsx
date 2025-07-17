'use client'
import { useCart } from "@/stores/cart"
import { Button } from "../ui/button"
import { useProducts } from "@/stores/products"
import { useState } from "react"

export const CartList = () => {
    const cart = useCart()
    const products = useProducts()

    const [ subTotal, setSubTotal ] = useState(0)
    const [ shippingCost, setShippingCost ] = useState(10)


  return (
    <>
        <div className="flex flex-col gap-3 my-5">
            ...
        </div>
        <div>Sub-total:</div>
        <div>Frete:</div>
        <div>Total:</div>
        <Button>Finalizar Compra</Button>
    </>
  )
}
