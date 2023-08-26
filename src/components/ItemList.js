import { useDispatch } from "react-redux";
import { ListItemImages } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  // console.log(ListItemImages + items[0]?.card?.info?.imageId);
  // console.log(items[0]?.card?.info);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item?.card?.info?.name}</span>
                <span> - ₹ {item?.card?.info?.price / 100}</span>
              </div>
              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
                  {" "}
                  Add+
                </button>
              </div>
              <img
                src={ListItemImages + item?.card?.info?.imageId}
                className="w-full"
                alt=""
              />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
