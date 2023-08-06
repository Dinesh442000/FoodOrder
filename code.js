// const cuisine = [
//   {
//     deeplink:
//       "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
//     url: "https://www.zomato.com/pune/restaurants/burger/",
//     name: "Burger",
//   },
//   {
//     deeplink:
//       "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
//     url: "https://www.zomato.com/pune/restaurants/fast-food/",
//     name: "Fast Food",
//   },
//   {
//     deeplink:
//       "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
//     url: "https://www.zomato.com/pune/restaurants/beverages/",
//     name: "Beverages",
//   },
// ];

// const Names = cuisine.reduce((acc, curr) => {
//   acc.push(curr["name"]);
//   return acc;
// }, []);

// console.log(Names.toString());

// const l1 = [1, 23, 3];
// l1.push(23);
// l1.pop();

// console.log(l1);
const resData = [
  {
    type: "restaurant",
    info: {
      resId: 20460657,
      name: "Pizza Hut",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/3/10503/7d1f0c24bf8d0ddf5aad917a9cc1d216_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/3/10503/7d1f0c24bf8d0ddf5aad917a9cc1d216_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "995",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "105",
            reviewTextSmall: "105 Reviews",
            subtext: "105 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "890",
            reviewTextSmall: "890 Reviews",
            subtext: "890 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹700 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Shukrawar Peth, Pune",
        address:
          "1, Final Plot. 47A, 1077 Shukrawar Peth, HBC Building, Near hirabaug chowk, Shukrawar Peth, Pune",
        localityUrl: "pune/shukrawar-peth-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/pune/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/pune/restaurants/pasta/",
          name: "Pasta",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/pune/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/pune/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹200 for one",
      },
    },
    order: {
      deliveryTime: "36 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/pune/pizza-hut-shukrawar-peth/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/pune/pizza-hut-shukrawar-peth/order",
      clickActionDeeplink: "",
    },
    distance: "1.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"d321c4e7-8377-4381-8097-d8d2482a510b","location_type":"delivery_cell","location_id":"4306215736965070848","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20460657","element_type":"listing","rank":1}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF up to 100",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
];

console.log(typeof Number(resData[0].info.rating.rating_text));
