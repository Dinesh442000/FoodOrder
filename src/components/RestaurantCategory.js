import ItemList from "./ItemList";
const RestaurantCategory = (data) => {
  return (
    <div>
      {
        // header
      }
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shodow-lg p-4 ">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data?.data?.title} ({data.data.itemCards.length})
          </span>
          <span>⬇</span>
        </div>
        <ItemList items={data?.data?.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
