import { ListItemImages } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(ListItemImages + items[0]?.card?.info?.imageId);
  console.log(items[0]?.card?.info);
  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left"
          >
            <img
              src={ListItemImages + item?.card?.info?.imageId}
              className="w-14"
              alt=""
            />
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span> - ₹ {item?.card?.info?.price / 100}</span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
