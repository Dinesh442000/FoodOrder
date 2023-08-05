import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState(resData);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const data1 = await json.data.cards[5].card.card.gridElements[
      "infoWithStyle"
    ].restaurants;
    console.log(data1);
    setlistofRestaurants(data1);
    // console.log(json.data.cards[5].card.gridElements);
    // setlistofRestaurants(json.)
  };

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
