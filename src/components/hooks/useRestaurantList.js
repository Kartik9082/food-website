import { useState, useEffect } from "react";
import { SWIGGY_API } from "../../utils/constants";

const useRestaurantList = () =>{
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        getRestaurant();
      }, []);
    
      async function getRestaurant() {
        const data = await fetch(SWIGGY_API);
        const JSON = await data.json();
        // console.log(JSON);
        setAllRestaurants(
          JSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurants(
          JSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
      }

    return [allRestaurants, filteredRestaurants, setFilteredRestaurants, setAllRestaurants];
}

export default useRestaurantList;