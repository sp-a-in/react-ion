import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantDetail = () => {

     let [restaurantDetail, setRestaurantDetail] = useState(null);
     let {id} = useParams();

    useEffect(()=> {
        fetchRestaurant();
    }, []);

    const fetchRestaurant = async () => {
        let response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.97530&lng=77.59100&restaurantId="+id);
        let restaurantData = await response.json();
        setRestaurantDetail(restaurantData);
    }

    if(!restaurantDetail) {
        return (
            <p>Loading.....</p>
        );
    }

    let {name, avgRating, costForTwoMessage, cuisines} = restaurantDetail?.data?.cards[2]?.card?.card?.info;
    let recommandationList = restaurantDetail?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1];
    let vegStarters = recommandationList?.card?.card?.itemCards;
    return (
        <div>
            <div className="restaurantInfo">
                <h1>{ name }</h1>
                <h3>{avgRating}</h3> <p>{costForTwoMessage}</p>
                <h4>{cuisines.join(",")}</h4>
            </div>
            <h3> Recommandations({vegStarters?.length}) </h3>
            <ul>
                {vegStarters.map((restaurant) => {
                    return (
                        <li>{restaurant?.card?.info?.name}</li> 
                    )
                })}
            </ul>
        </div>
    )
}

export default RestaurantDetail;