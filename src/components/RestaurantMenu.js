import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SWIGGY_RESTAURANT_DETAILS_API, IMG_CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "./hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import MenuShimmer from "./MenuShimmer";

const RestaurantMenu = () => {
  const param = useParams();
  const { id } = param;

  const resInfo = useRestaurantMenu(id);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <MenuShimmer />;

  const {
    city,
    totalRatingsString,
    name,
    avgRating,
    cuisines,
    costForTwoMessage,
    areaName,
    cloudinaryImageId,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  // console.log(resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards)

  const categories =
    resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="text-center">
      <div className="">
        <img
          className="mx-auto my-4 w-52 h-auto rounded-lg"
          src={IMG_CDN_URL + cloudinaryImageId}
        />
        <h1 className="font-bold my-6 text-2xl ">{name}</h1>
      </div>

      {/* <h2 className="">{areaName}</h2> */}
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={()=> setShowIndex(index)}
          // showItems={false}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
