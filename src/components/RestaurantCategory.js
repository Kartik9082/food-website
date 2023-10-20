import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // console.log(data.title);
  const handleClick = () => {
    setShowIndex(!showItems);
  };
  console.log("data.itemCards:", data.itemCards);


  return (
    <div className="">
      <div
        className="w-6/12 mx-auto my-4 bg-slate-100 shadow-lg p-4 cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <span className="font-bold">
            {data.title}({data.itemCards.length})
          </span>
          <span className="">🔽</span>
        </div>



        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
