import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurentCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRatingString,
  areaName,
  costForTwo,
}) => {


  
  const { loggedUser } = useContext(UserContext);

  return (
    <div className="w-56 p-2 m-2 shadow-lg h-[415px] rounded-lg text-start transition duration-300 ease-in-out hover:scale-95">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        className="rounded-lg bg-cover"
      />
      <h2 className="font-bolo text-2xl py-2">{name}</h2>
      {/* <h3> Cuisines : {cuisines.join(", ")}</h3> */}
      <h4 className="p-2">
        {avgRatingString}
        <span>🌟</span>{" "}
      </h4>
      <p className="p-0">{areaName}</p>

      <p className="">{costForTwo}</p>
      <p>{loggedUser}</p>
    </div>
  );
};

export default RestaurentCard;
