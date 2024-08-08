import {  useDispatch } from "react-redux";
import "./items.css"
import { actionCart } from "../../store/cart-slice";
export interface ProductProps {
    id?:string
    name: string;
    category: string;
    price: number;
}
const Items:React.FC<ProductProps>=({name, category, price, id})=>{
    const dispatch = useDispatch();
    console.log("Items")
    return (
        <div className="card">

        <h2>{name}</h2>
        <p>Category: {category}</p>
        <p>Price: ${price}</p>
        <button onClick={() => dispatch(actionCart.addCarts( {name, category, price, id }))}>Add to Cart</button>
    </div>
    )


}

export default Items