import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import EmptyCart from "../components/images/empty-cart.png"
// import CartItem from "./CartItem";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
      dispatch(clearCart());
    };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto justify-center">
        <button
          className=" p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems?.length === 0 && (
          <>
           <img 
           className="w-7/12 text-center my-4"
           src={EmptyCart} />
            <button className="hover:shadow-xl capitalize transition-all p-2 px-4 bg-green-700 rounded w-[fit-content] text-white text-sm font-bold my-4">
            <Link to="/">See Restaurants Near You!</Link>
          </button>
           </>

        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
