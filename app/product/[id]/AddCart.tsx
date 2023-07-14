'use client'

import { useCartStore } from "@/store"
import { AddCartType } from "@/types/AddCartType"
import { useState } from "react"
export default function AddCart({name, id, image, unit_amount, quantity}: AddCartType) {
    const [added, setAdded] = useState(false)

    const handleAddToCart = () => {
        cartStore.addProduct({id, name, unit_amount, quantity, image})
        setAdded(true)
        setTimeout(()=>setAdded(false), 600);
    }
    const cartStore = useCartStore()
    
    
    return (
        <>
            <button
            onClick={handleAddToCart}
            disabled={added}
             className="my-4 btn btn-neutral w-full">
                {
                    !added && <span>Add to cart</span>
                }
                {
                    added && <span>Adding to cart ... </span>
                }
            </button>
        </>
    )
}