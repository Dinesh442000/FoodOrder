import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=485330&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    //console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  console.log(resInfo);
  console.log(resInfo?.cards[0]?.card?.card?.info.name);
  // const { name, cuisines, costForTwoMessage } =
  //   resInfo?.cards[0]?.card?.card?.info;
  //const { name } = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
      <h3>
        {resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")} -{" "}
        {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}
      </h3>

      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
