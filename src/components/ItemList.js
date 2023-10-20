import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { addItem } from "../redux/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items)
  // console.log(Array.isArray(items))
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action when clicked ADD btn
    dispatch(addItem(item)); 
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          npm
          className="p-2 m-4  border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12 py-5">
            <div className="py-3 font-medium">
              <span>{item.card.info.name}</span>
              <span className="p-2">
                - ₹
                {item.card.info.defaultPrice
                  ? item.card.info.defaultPrice / 100
                  : item.card.info.price / 100}
              </span>
            </div>

            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="3/12">
            <div className="absolute">
              <button
                className="p-3 mx-10 my-12 shadow-lg rounded-lg bg-emerald-50 text-green-400"
                onClick={() =>handleAddItem(item)}
              >
                ADD
              </button>
            </div>
            <img
              src={IMG_CDN_URL + item.card.info.imageId}
              alt="item-logo"
              className="w-32 rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
