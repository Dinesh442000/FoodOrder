import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { resId } = useParams();
  console.log(resId);

  const resInfo = useRestaurantMenu(resId);
  // const fetchData = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   //console.log(json);
  //   setResInfo(json.data);
  // };

  if (resInfo === null) {
    return <Shimmer />;
  }
  console.log(resInfo);
  console.log(resInfo?.cards[0]?.card?.card?.info.name);
  // const { name, cuisines, costForTwoMessage } =
  //   resInfo?.cards[0]?.card?.card?.info;
  //const { name } = resInfo?.cards[0]?.card?.card?.info;
  //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log(categories);
  // console.log(itemCards);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">
        {resInfo?.cards[0]?.card?.card?.info?.name}
      </h1>
      <p className="font-bold">
        {resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")} -{" "}
        {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}
      </p>

      {categories.map((category) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
        />
      ))}

      {/* <h3>
        {resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")} -{" "}
        {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}
      </h3>

      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs {item.card.info.price / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
