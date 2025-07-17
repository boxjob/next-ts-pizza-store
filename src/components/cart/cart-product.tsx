'use client'
import { decimalToMoney } from "@/lib/utils"
import { useProducts } from "@/stores/products"
import { CartItem } from "@/types/cartItem"
import Image from "next/image"
import { Button } from "../ui/button"
import { useState } from "react"
import { useCart } from "@/stores/cart"

export const CartProduct = ({ data }:{ data:CartItem }) => {
  const cart = useCart()
  const products = useProducts()
  const [ qt, setQt ] = useState( data.quantity )
  
  let product = products.products.find( item => item.id === data.productId)
  if( !product ) return null

  const handleMinusClick = () => {
    if( qt - 1 <= 0 ){
      cart.removeItem( data.productId )
    } else {
      cart.addItem({ productId: data.productId, quantity: -1 })
      setQt( qt - 1 )
    }
  }

  const handlePlusClick = () => {
    cart.addItem({ productId: data.productId, quantity: 1 })
    setQt( qt + 1 )
  }

  return (
    <div className="flex items-center gap-3">
      <div className="w-10">
        <Image 
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/pizzas/${product.image}`}
          alt={ product.name }
          width={100}
          height={100}
          className="w-full"
        />
      </div>
      <div className="flex-1">
        <div>{ product.name }</div>
        <div className="text-sm">{ decimalToMoney( product.price )}</div>
      </div>
      <div className="flex items-center bg-secondary p-2 rounded-md">
        <Button onClick={ handleMinusClick } size='sm' variant={'ghost'}>-</Button>
        <div className="mx-3">{ qt }</div>
        <Button onClick={ handlePlusClick } size='sm' variant={'ghost'}>+</Button>
      </div>
    </div>
  )
}
