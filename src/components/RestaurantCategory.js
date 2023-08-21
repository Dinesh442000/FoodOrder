import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIdex }) => {
  // const [showItem, setShowItem] = useState(false);
  // //const showItem = true;
  console.log(showItems);
  const handleClick = () => {
    setShowIdex(null);
    setShowIdex();
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
            {data?.title} ({data.itemCards.length})
          </span>
          <span>⬇</span>
        </div>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
