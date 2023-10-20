import { restaurantList2 } from "../constants";
import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/isOnline";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // console.log("Anything", allRestaurants)

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6902392&lng=77.3403391&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const JSON = await data.json();
    // console.log(JSON);
    setAllRestaurants(
      JSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      JSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOnline = useOnline();

  if (!isOnline) return <h1>🚫Looks like, you are Offline</h1>;

  if (!allRestaurants) return null;

  // if(filteredRestaurants.length===0) return <h1>No Restaurant Found</h1>

  return (allRestaurants.length === 0) ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="search-bar p-5 flex justify-center">
        <input
          type="text"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
          placeholder="Search for restaurent"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
          className="p-2 m-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring-violet-300 text-white rounded-md transition duration-200 ease-in-out"
        >
          Search
        </button>

        <button
        className="p-2 bg-slate-950 text-white hover:bg-slate-600 active:bg-slate-700 focus:outline-none focus:ring-violet-300 rounded-lg transition duration-300 ease-in-out"
          onClick={() => {
            
            const filteredList = filteredRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.length === 0 ? (
          <h1>No Restaurant Found</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant.info.id}>
                {" "}
                <RestaurentCard
                  {...restaurant.info}
                  key={restaurant.info.id}
                />{" "}
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
