import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = (data) => {
  const [showItem, setShowItem] = useState(false);
  //const showItem = true;
  const handleClick = () => {
    setShowItem(!showItem);
  };

  return (
    <div>
      {
        // header
      }
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shodow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.data?.title} ({data.data.itemCards.length})
          </span>
          <span>⬇</span>
        </div>
        {showItem && <ItemList items={data?.data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
