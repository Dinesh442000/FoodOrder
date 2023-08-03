import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState(resData);

  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listofRestaurants.filter(
              (resData) => Number(resData.info.rating.rating_text) >= 4
            );
            setlistofRestaurants(filterList);
            console.log(filterList);
          }}
        >
          Top Rated Restaurats
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
