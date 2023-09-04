import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  //console.log(resData);
  // console.log(props);
  // console.log(resData.data?.cloudinaryImageId);
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;
  // console.log(cloudinaryImageId);
  // console.log(resData?.info);
  //console.log(sla);
  return (
    <div className="m-4 p-4 w-56 rounded-lg bg-gray-100 hover:bg-gray-300">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromotedlabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute font-bold bg-black text-white rounded-lg m-2 p-2">
          Star Res
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
