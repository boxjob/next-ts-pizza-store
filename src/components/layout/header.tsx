

import Link from "next/link"
import { Button } from "../ui/button"
import { CartButton } from "../cart/cart-button"

export const Header = () => {
    return (
        <header className="container mx-auto my-4 p-5 rounded-md flex items-center justify-between bg-secondary">
            <Link href='/'>
                <div className="text-2xl font-bold">B7Pizza</div>
            </Link>
            <div className="flex gap-2">
                <Button>Login / Cadastro</Button>
                <CartButton/>
            </div>
        </header>
    )
}
