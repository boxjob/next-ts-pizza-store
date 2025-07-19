import Link from "next/link"
import { CartButton } from "../cart/cart-button"
import { LoginAreaButton } from "../login-area/login-area-button"
import { cookies } from "next/headers"

export const Header = async () => {

    const cookieStore = await cookies()
    const token = cookieStore.get('token')

    return (
        <header className="container mx-auto my-4 p-5 rounded-md flex items-center justify-between bg-secondary">
            <Link href='/'>
                <div className="text-2xl font-bold">B7Pizza</div>
            </Link>
            <div className="flex gap-2">
                <LoginAreaButton initialState={ token ? true : false }/>
                <CartButton/>
            </div>
        </header>
    )
}
