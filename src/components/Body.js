import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Seach</div>
      <div className="res-container">
        {resData.map((restaurant) => (
          <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
        ))}
        {/* <RestaurantCard resData={resData[0]} />
          <RestaurantCard resData={resData[1]} />
          <RestaurantCard resData={resData[2]} />
          <RestaurantCard resData={resData[3]} />
          <RestaurantCard resData={resData[4]} />
          <RestaurantCard resData={resData[5]} />
          <RestaurantCard resData={resData[6]} />
          <RestaurantCard resData={resData[7]} />
          <RestaurantCard resData={resData[8]} /> */}
      </div>
    </div>
  );
};

export default Body;
