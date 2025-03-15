import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../stores/slices/cartSlice"

const CartDetails = ()=> {

    let itemsList = useSelector((state)=> state.cart.items)
    let dispatch = useDispatch();
    let handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="text-center p-4 m-auto w-6/12">
            <h1 className="font-bold">Cart</h1>
            <button className="border-red-600 font-bold rounded-2xl border-2 p-2 m-2 text-red-600 cursor-pointer" onClick={handleClearCart}>
             Clear Cart
            </button>
            <div>
                {
                    itemsList.map((item)=> {
                        return <ItemList item={item} />
                    })
                }
            </div>
        </div>
    )
}


export default CartDetails