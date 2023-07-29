const styleCard = {
  background: "pink",
};
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisine, costText, image } = resData?.info;
  const { deliveryTime } = resData?.order;
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={image.url} alt="res-logo" srcSet="" />
      <h3>{name}</h3>
      <h4>
        {(Names = cuisine.reduce((acc, curr) => {
          acc.push(curr["name"]);
          return acc;
        }, [])).toString()}
      </h4>
      <h4>{"Rating: " + resData.info.rating.rating_text}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{costText.text}</h4>
    </div>
  );
};

export default RestaurantCard;
