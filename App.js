import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://s.tmimgcdn.com/scr/1200x627/181700/order-food-logo-design-template_181713-original.jpg"
          alt="Img not found"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  background: "pink",
};
/*
const resData = {
  type: "restaurant",
  info: {
    resId: 18649596,
    name: "Burger King",
    image: {
      url: "https://b.zmtcdn.com/data/pictures/chains/8/6506108/a6c8129329bf976270361b45058f110b_o2_featured_v2.jpg",
    },
    o2FeaturedImage: {
      url: "https://b.zmtcdn.com/data/pictures/chains/8/6506108/a6c8129329bf976270361b45058f110b_o2_featured_v2.jpg",
    },
    rating: {
      has_fake_reviews: 0,
      aggregate_rating: "3.7",
      rating_text: "3.7",
      rating_subtitle: "Good",
      rating_color: "9ACD32",
      votes: "8,144",
      subtext: "REVIEWS",
      is_new: false,
    },
    ratingNew: {
      newlyOpenedObj: null,
      suspiciousReviewObj: null,
      ratings: {
        DINING: {
          rating_type: "DINING",
          rating: "3.4",
          reviewCount: "261",
          reviewTextSmall: "261 Reviews",
          subtext: "261 Dining Reviews",
          color: "#1C1C1C",
          ratingV2: "3.4",
          subtitle: "DINING",
          sideSubTitle: "Dining Reviews",
          bgColorV2: {
            type: "green",
            tint: "500",
          },
        },
        DELIVERY: {
          rating_type: "DELIVERY",
          rating: "3.9",
          reviewCount: "7,883",
          reviewTextSmall: "7,883 Reviews",
          subtext: "7,883 Delivery Reviews",
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
      text: "₹350 for two",
    },
    cfo: {
      text: "₹200 for one",
    },
    locality: {
      name: "The Pavillion, Senapati Bapat Road, Pune",
      address:
        "S 430A/1, Lower Ground Floor, Unit 1, The Pavilion Mall, Shivaji Nagar, Senapati Bapat Road, Pune",
      localityUrl: "pune/restaurants/in/the-pavillion-senapati-bapat-road",
    },
    timing: {
      text: "",
      color: "",
    },
    cuisine: [
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
        url: "https://www.zomato.com/pune/restaurants/burger/",
        name: "Burger",
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
    deliveryTime: "50 min",
    isServiceable: true,
    hasOnlineOrdering: true,
    actionInfo: {
      text: "Order Now",
      clickUrl: "/pune/burger-king-1-senapati-bapat-road/order",
    },
  },
  gold: [],
  takeaway: [],
  cardAction: {
    text: "",
    clickUrl: "/pune/burger-king-1-senapati-bapat-road/order",
    clickActionDeeplink: "",
  },
  distance: "3.2 km",
  isPromoted: false,
  promotedText: "",
  trackingData: [
    {
      table_name: "zsearch_events_log",
      payload:
        '{"search_id":"a6ae15f0-1bba-4f03-8684-1a44cdcfa3e3","location_type":"delivery_cell","location_id":"4306215736965070848","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18649596","element_type":"listing","rank":1}',
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
  bottomContainers: [
    {
      image: {
        url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
        aspect_ratio: 2.66666666667,
      },
      text: "Follows all Max Safety measures to ensure your food is safe",
    },
  ],
};
*/

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
  {
    type: "restaurant",
    info: {
      resId: 20568361,
      name: "Domio's Pizza - A - 1 Pizza Shop",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/1/20568361/aed8b37e27e0604adc798833052f9bb2_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/1/20568361/aed8b37e27e0604adc798833052f9bb2_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.7",
        rating_text: "3.7",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "493",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.7",
            reviewCount: "493",
            reviewTextSmall: "493 Reviews",
            subtext: "493 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.7",
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
        text: "₹400 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Karve Nagar, Pune",
        address: "Lane 6, Karve Nagar, Pune",
        localityUrl: "pune/karve-nagar-restaurants",
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
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          url: "https://www.zomato.com/pune/restaurants/sandwich/",
          name: "Sandwich",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/pune/restaurants/burger/",
          name: "Burger",
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
      deliveryTime: "51 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/pune/domios-pizza-a-1-pizza-shop-karve-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/pune/domios-pizza-a-1-pizza-shop-karve-nagar/order",
      clickActionDeeplink: "",
    },
    distance: "5.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"d321c4e7-8377-4381-8097-d8d2482a510b","location_type":"delivery_cell","location_id":"4306215736965070848","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20568361","element_type":"listing","rank":2}',
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
  {
    type: "restaurant",
    info: {
      resId: 6506061,
      name: "Garden Vada Pav Centre",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/13280/0f7756cfcc8f71eca3020d33c8541b35_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/13280/0f7756cfcc8f71eca3020d33c8541b35_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.3",
        rating_text: "4.3",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "11.6K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.3",
            reviewCount: "642",
            reviewTextSmall: "642 Reviews",
            subtext: "642 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "11K",
            reviewTextSmall: "11K Reviews",
            subtext: "11K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹100 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Erandwane, Pune",
        address: "Butte Patil Apartment, Nal Stop, Erandwane, Pune",
        localityUrl: "pune/erandwane-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/pune/restaurants/street-food/",
          name: "Street Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹200 for one",
      },
    },
    order: {
      deliveryTime: "46 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/pune/garden-vada-pav-centre-erandwane/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/pune/garden-vada-pav-centre-erandwane/order",
      clickActionDeeplink: "",
    },
    distance: "3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"d321c4e7-8377-4381-8097-d8d2482a510b","location_type":"delivery_cell","location_id":"4306215736965070848","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"6506061","element_type":"listing","rank":3}',
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
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 6506151,
      name: "Supreme Sandwich Corner",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/1/6506151/0306a74f3abdb4d68985a5a34d53fed3_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/1/6506151/0306a74f3abdb4d68985a5a34d53fed3_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.6",
        rating_text: "3.6",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "1,261",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "2.9",
            reviewCount: "10",
            reviewTextSmall: "10 Reviews",
            subtext: "10 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "2.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "yellow",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "1,251",
            reviewTextSmall: "1,251 Reviews",
            subtext: "1,251 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹300 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Budhwar Peth, Pune",
        address: "Survey 34, Shop 4, Budhwar Peth, Pune",
        localityUrl: "pune/budhwar-peth-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/pune/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          url: "https://www.zomato.com/pune/restaurants/sandwich/",
          name: "Sandwich",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/pune/restaurants/pizza/",
          name: "Pizza",
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
        clickUrl: "/pune/supreme-sandwich-corner-budhwar-peth/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/pune/supreme-sandwich-corner-budhwar-peth/order",
      clickActionDeeplink: "",
    },
    distance: "488 m",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"d321c4e7-8377-4381-8097-d8d2482a510b","location_type":"delivery_cell","location_id":"4306215736965070848","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"6506151","element_type":"listing","rank":4}',
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
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 20303704,
      name: "Cafe Durga",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/1/12511/dd107b2bc15c96817c47ccb2bddb53a2_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/1/12511/dd107b2bc15c96817c47ccb2bddb53a2_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.5",
        rating_text: "3.5",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "1",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.2",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "0 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.7",
            reviewCount: "1",
            reviewTextSmall: "1 Reviews",
            subtext: "1 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.7",
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
        text: "₹300 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "JM Road, Pune",
        address: "Shop 2, Castle Plaza, Near JM Temple, JM Road, Pune",
        localityUrl: "pune/jm-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/pune/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹200 for one",
      },
    },
    order: {
      deliveryTime: "16 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/pune/cafe-durga-1-jm-road/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/pune/cafe-durga-1-jm-road/order",
      clickActionDeeplink: "",
    },
    distance: "840 m",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"d321c4e7-8377-4381-8097-d8d2482a510b","location_type":"delivery_cell","location_id":"4306215736965070848","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20303704","element_type":"listing","rank":5}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 10624,
      name: "KFC",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/10624/0b79e39ffc2e3770f3b66b26c0e6f4fd_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/10624/0b79e39ffc2e3770f3b66b26c0e6f4fd_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.7",
        rating_text: "3.7",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "4,480",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.6",
            reviewCount: "920",
            reviewTextSmall: "920 Reviews",
            subtext: "920 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.6",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "3,560",
            reviewTextSmall: "3,560 Reviews",
            subtext: "3,560 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
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
        text: "₹400 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "R Deccan Mall, JM Road, Pune",
        address: "Shop 1- 4, Ground Floor, R Deccan Mall, JM Road, Pune",
        localityUrl: "pune/restaurants/in/r-deccan-mall-jm-road",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/pune/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/pune/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/pune/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/pune/restaurants/desserts/",
          name: "Desserts",
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
      deliveryTime: "24 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/pune/kfc-jm-road/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/pune/kfc-jm-road/order",
      clickActionDeeplink: "",
    },
    distance: "1.6 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"d321c4e7-8377-4381-8097-d8d2482a510b","location_type":"delivery_cell","location_id":"4306215736965070848","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"10624","element_type":"listing","rank":6}',
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
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 20122553,
      name: "La Pino'z Pizza",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/1/18888611/54b6de34323395a3b10897e48bd2a6e5_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/1/18888611/54b6de34323395a3b10897e48bd2a6e5_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.7",
        rating_text: "3.7",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "1,811",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.7",
            reviewCount: "63",
            reviewTextSmall: "63 Reviews",
            subtext: "63 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.7",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.7",
            reviewCount: "1,748",
            reviewTextSmall: "1,748 Reviews",
            subtext: "1,748 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.7",
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
        text: "₹300 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "FC Road, Pune",
        address:
          "Showroom 1, CTS 1216/1 F.P. 576/1, Stilt Floor, MOSAIK Commercial Complex, Bhamburda, Shivaji Nagar, Opposite Furgussion College, FC Road, Pune",
        localityUrl: "pune/fc-road-restaurants",
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
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/pune/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/pune/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹200 for one",
      },
    },
    order: {
      deliveryTime: "30 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/pune/la-pinoz-pizza-fc-road/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/pune/la-pinoz-pizza-fc-road/order",
      clickActionDeeplink: "",
    },
    distance: "1.6 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"d321c4e7-8377-4381-8097-d8d2482a510b","location_type":"delivery_cell","location_id":"4306215736965070848","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20122553","element_type":"listing","rank":7}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19859738,
      name: "The Momo Panda",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/1/18738311/feeaa77735c4b3506cd2ba67a0f30ae8_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/1/18738311/feeaa77735c4b3506cd2ba67a0f30ae8_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "823",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "823",
            reviewTextSmall: "823 Reviews",
            subtext: "823 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹250 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "FC Road, Pune",
        address:
          "1216/2+3, Millenium Plaza, Opposite Fergusson College Gate 3, FC Road, Pune",
        localityUrl: "pune/fc-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA1MVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/pune/restaurants/momos/",
          name: "Momos",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹200 for one",
      },
    },
    order: {
      deliveryTime: "32 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/pune/the-momo-panda-1-fc-road/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/pune/the-momo-panda-1-fc-road/order",
      clickActionDeeplink: "",
    },
    distance: "1.7 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"d321c4e7-8377-4381-8097-d8d2482a510b","location_type":"delivery_cell","location_id":"4306215736965070848","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19859738","element_type":"listing","rank":8}',
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
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 6507737,
      name: "Kaka Halwai",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/1/12041/c2a5d1ef083c665202f8093b9825cdb0_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/1/12041/c2a5d1ef083c665202f8093b9825cdb0_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.4",
        rating_text: "4.4",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "538",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.4",
            reviewCount: "538",
            reviewTextSmall: "538 Reviews",
            subtext: "538 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Budhwar Peth, Pune",
        address: "1114,Near Datta Mandir, Budhwar Peth, Pune",
        localityUrl: "pune/budhwar-peth-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/pune/restaurants/mithai/",
          name: "Mithai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/pune/restaurants/street-food/",
          name: "Street Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹200 for one",
      },
    },
    order: {
      deliveryTime: "24 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/pune/kaka-halwai-budhwar-peth/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/pune/kaka-halwai-budhwar-peth/order",
      clickActionDeeplink: "",
    },
    distance: "630 m",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"d321c4e7-8377-4381-8097-d8d2482a510b","location_type":"delivery_cell","location_id":"4306215736965070848","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"6507737","element_type":"listing","rank":9}',
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
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 19697090,
      name: "Momo's Corrner",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/7/18531977/12174430e7796e0dfa7f0e16de5599b0_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/7/18531977/12174430e7796e0dfa7f0e16de5599b0_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "2,715",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.4",
            reviewCount: "48",
            reviewTextSmall: "48 Reviews",
            subtext: "48 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.4",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "2,667",
            reviewTextSmall: "2,667 Reviews",
            subtext: "2,667 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹300 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Kondhwa, Pune",
        address:
          "Shop D, Plot 44, Ground Floor, Survey 63, Near Sunshree Building, Kondhwa, Pune",
        localityUrl: "pune/kondhwa-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA1MVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/pune/restaurants/momos/",
          name: "Momos",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/pune/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/pune/restaurants/shake/",
          name: "Shake",
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
      deliveryTime: "50 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/pune/momos-corrner-kondhwa/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/pune/momos-corrner-kondhwa/order",
      clickActionDeeplink: "",
    },
    distance: "6.6 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"d321c4e7-8377-4381-8097-d8d2482a510b","location_type":"delivery_cell","location_id":"4306215736965070848","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19697090","element_type":"listing","rank":10}',
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
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 20314301,
      name: "Taco Bell",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/9/18975289/d2ee26b90b3fc64c1aaaccc058db9208_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/9/18975289/d2ee26b90b3fc64c1aaaccc058db9208_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "1,745",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.8",
            reviewCount: "135",
            reviewTextSmall: "135 Reviews",
            subtext: "135 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "1,610",
            reviewTextSmall: "1,610 Reviews",
            subtext: "1,610 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
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
        text: "₹650 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "FC Road, Pune",
        address: "Shop 7, 8, 9, 10, Ground Floor, FC Road, Pune",
        localityUrl: "pune/fc-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzNcIl19Il0%3D",
          url: "https://www.zomato.com/pune/restaurants/mexican/",
          name: "Mexican",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/pune/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyNFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/pune/restaurants/wraps/",
          name: "Wraps",
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
      deliveryTime: "31 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/pune/taco-bell-fc-road/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/pune/taco-bell-fc-road/order",
      clickActionDeeplink: "",
    },
    distance: "1.6 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"d321c4e7-8377-4381-8097-d8d2482a510b","location_type":"delivery_cell","location_id":"4306215736965070848","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20314301","element_type":"listing","rank":11}',
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
  {
    type: "restaurant",
    info: {
      resId: 6503534,
      name: "Rajendra PavBhaji and Juice Bar",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/6503534/fd6ce5b3a8c0f8845f4adf93f6a4ff36_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/4/6503534/fd6ce5b3a8c0f8845f4adf93f6a4ff36_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "3,914",
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
            reviewCount: "170",
            reviewTextSmall: "170 Reviews",
            subtext: "170 Dining Reviews",
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
            rating: "4.1",
            reviewCount: "3,744",
            reviewTextSmall: "3,744 Reviews",
            subtext: "3,744 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹300 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Rasta Peth, Pune",
        address: "Shop 2, House 355, Tirupathi Complex, Rasta Peth, Pune",
        localityUrl: "pune/rasta-peth-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/pune/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/pune/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
          url: "https://www.zomato.com/pune/restaurants/ice-cream/",
          name: "Ice Cream",
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
      deliveryTime: "24 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/pune/rajendra-pavbhaji-and-juice-bar-rasta-peth/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/pune/rajendra-pavbhaji-and-juice-bar-rasta-peth/order",
      clickActionDeeplink: "",
    },
    distance: "1.2 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"d321c4e7-8377-4381-8097-d8d2482a510b","location_type":"delivery_cell","location_id":"4306215736965070848","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"6503534","element_type":"listing","rank":12}',
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
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={resData.info.image.url}
        alt="res-logo"
        srcSet=""
      />
      <h3>{resData.info.name}</h3>
      <h4>
        {(Names = resData.info.cuisine.reduce((acc, curr) => {
          acc.push(curr["name"]);
          return acc;
        }, [])).toString()}
      </h4>
      <h4>{"Rating: " + resData.info.rating.rating_text}</h4>
      <h4>{resData.order.deliveryTime}</h4>
      <h4>{resData.info.costText.text}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Seach</div>
      <div className="res-container">
        <RestaurantCard resData={resData[0]} />
        <RestaurantCard resData={resData[1]} />
        <RestaurantCard resData={resData[2]} />
        <RestaurantCard resData={resData[3]} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
