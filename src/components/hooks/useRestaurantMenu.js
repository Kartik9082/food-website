import { useState, useEffect } from "react";
import { SWIGGY_RESTAURANT_DETAILS_API } from "../../utils/constants";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(SWIGGY_RESTAURANT_DETAILS_API + id);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
