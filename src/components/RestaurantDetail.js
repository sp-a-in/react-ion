import { useParams } from "react-router-dom";
import useRestaurantDetail from "../utils/useRestaurantDetail";

const RestaurantDetail = () => {


     let {id} = useParams();

     let restaurantDetail = useRestaurantDetail(id)


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