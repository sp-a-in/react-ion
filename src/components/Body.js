import RestaurantCard from "./RestaurantCard";
// import resData from "../utils/dummyData";
import { useState } from "react";


let Body = () => {

    let resData = [
        {
            "info": {
                "id": "10575",
                "name": "Pizza Hut",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/5b9c53df-e0cb-48fc-ac31-f02735592edc_10575.jpg",
                "locality": "Richmond Town",
                "areaName": "Central Bangalore",
                "costForTwo": "₹600 for two",
                "cuisines": [
                    "Pizzas"
                ],
                "avgRating": 4.3,
                "parentId": "721",
                "avgRatingString": "4.3",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 35,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
            },
        },
        {
            "info": {
                "id": "405798",
                "name": "Chinese Wok",
                "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                "locality": "Malleshwaram",
                "areaName": "Malleshwaram",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Chinese",
                    "Asian",
                    "Tibetan",
                    "Desserts"
                ],
                "avgRating": 4.4,
                "parentId": "61955",
                "avgRatingString": "4.4",
                "totalRatingsString": "1.2K+",
                "sla": {
                    "deliveryTime": 52,
                    "lastMileTravel": 5.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "50-55 mins",
                    "lastMileTravelString": "5.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
            },
        },
        {
            "info": {
                "id": "5938",
                "name": "Burger King",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5938.JPG",
                "locality": "Tasker Town",
                "areaName": "Shivaji Nagar",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Burgers",
                    "American"
                ],
                "avgRating": 4.4,
                "parentId": "166",
                "avgRatingString": "4.4",
                "totalRatingsString": "37K+",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
            },
        },
        {
            "info": {
                "id": "69274",
                "name": "Chai Point",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/22/5ee468dd-aeb5-4779-84e8-be4f9fcdb5db_69274.jpg",
                "locality": "Ashok Nagar",
                "areaName": "Ashok Nagar",
                "costForTwo": "₹150 for two",
                "cuisines": [
                    "Bakery",
                    "Beverages",
                    "Maharashtrian",
                    "Snacks",
                    "Street Food",
                    "South Indian",
                    "Punjabi",
                    "Chaat",
                    "Indian",
                    "American"
                ],
                "avgRating": 4.5,
                "parentId": "1607",
                "avgRatingString": "4.5",
                "totalRatingsString": "9.7K+",
                "sla": {
                    "deliveryTime": 31,
                    "lastMileTravel": 2.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "2.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
            },
        },
        {
            "info": {
                "id": "396750",
                "name": "The Biryani Life",
                "cloudinaryImageId": "wvjsuvqrd6ahqqyhmnrt",
                "locality": "Residency Road",
                "areaName": "Central Bangalore",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Biryani",
                    "Mughlai",
                    "Lucknowi",
                    "Hyderabadi",
                    "Kebabs",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 3.9,
                "parentId": "8496",
                "avgRatingString": "3.9",
                "totalRatingsString": "403",
                "sla": {
                    "deliveryTime": 28,
                    "lastMileTravel": 2.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "2.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                }
            }
        },
        {
            "info": {
                "id": "770772",
                "name": "Olio - The Wood Fired Pizzeria",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/26/bbfbe1b8-c0b4-4470-bff7-67f7793f8355_770772.jpg",
                "locality": "Ali Askar Road",
                "areaName": "Central Bangalore",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Pizzas",
                    "Pastas",
                    "Italian",
                    "Fast Food",
                    "Snacks",
                    "Beverages",
                    "Desserts"
                ],
                "avgRating": 4.4,
                "parentId": "11633",
                "avgRatingString": "4.4",
                "totalRatingsString": "765",
                "sla": {
                    "deliveryTime": 39,
                    "lastMileTravel": 3.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "3.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-01-27 05:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Gourmet",
                                        "imageId": "newg.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹99"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-59f1a36c-3f95-48f1-a837-9e2aeef5f127"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/olio-the-wood-fired-pizzeria-ali-askar-road-central-bangalore-rest770772",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "29673",
                "name": "Natural Ice Cream",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/3/da31e4ed-4a6c-4fe2-b41d-7eaaea4c1787_29673.JPG",
                "locality": "St. Marks Road",
                "areaName": "Central Bangalore",
                "costForTwo": "₹150 for two",
                "cuisines": [
                    "Ice Cream",
                    "Desserts"
                ],
                "avgRating": 4.7,
                "parentId": "2093",
                "avgRatingString": "4.7",
                "totalRatingsString": "11K+",
                "sla": {
                    "deliveryTime": 17,
                    "lastMileTravel": 1.3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "1.3 km",
                    "iconType": "ICON_TYPE_EMPTY"
                }
            },
        },
        {
            "info": {
                "id": "566497",
                "name": "Faasos' Signature Wraps & Rolls",
                "cloudinaryImageId": "c583ca6ce40b426797a78ae2ac91f2ec",
                "locality": "Residency Road",
                "areaName": "Central Bangalore",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Fast Food",
                    "Snacks",
                    "North Indian",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.3,
                "parentId": "340366",
                "avgRatingString": "4.3",
                "totalRatingsString": "50",
                "sla": {
                    "deliveryTime": 38,
                    "lastMileTravel": 2.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "2.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                }
            },
        }
    ];

    let [resData2, setResData] =  useState(resData);

    return (
        <div className="body">
            <div className="searchBar">
                <span>Search</span>
                <img src="https://img.icons8.com/?size=100&id=132&format=png&color=000000" className="searchIcon" />
            </div>
            <div className="filterButton">
                <button onClick={()=> {
                    resData2 = resData2.filter((restaurant)=> {
                        return restaurant.info.avgRating > 4.3;
                    })
                    setResData(resData2)  
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="restaurants">
                {/* <RestaurantCard resData={resData[0]}/>
                <RestaurantCard resData={resData[1]}/> */}
                {
                    resData2.map((restaurant) => (
                        <RestaurantCard 
                        resData={restaurant}
                        key={restaurant.info.id}   
                    />
                    )) 
                }
                {/* <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard /> */}
            </div>
        </div>
    )
}

export default Body;