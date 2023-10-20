import { useState, useContext } from "react";
import Logo from "../components/images/burger_king.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import cart from "./images/shopping-bag.png";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <a href="/">
      <img className="h-28 p-4" alt="logo" src={Logo} />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { loggedUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  // console.log(data)

  return (
    <div className="flex justify-between  bg-slate-50 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-5 my-4">
            <Link to="/">Home </Link>
          </li>
          <li className="px-5 my-4">
            <Link to="/about">About </Link>
          </li>
          <li className="px-5 my-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-5 my-4">
            <Link to="/instamart">Grocery</Link>
          </li>
          <Link to="/cart">
            <li className="px-5 my-4 font-bold">
              <span>🛒</span> ({cartItems.length})
            </li>
          </Link>
          {isLoggedIn ? (
            <button
              className="h-10 p-2 m-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring-violet-300 text-white rounded-md"
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </button>
          ) : (
            <button
              className="h-10 p-2 m-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring-violet-300 text-white rounded-md"
              onClick={() => setIsLoggedIn(true)}
            >
              Login
            </button>
          )}
          <li className="px-5 my-4">{loggedUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
