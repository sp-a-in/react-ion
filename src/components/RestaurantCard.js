import { CDN_URL } from "../utils/constants";

let RestaurantCard = (props) => {
    let {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = props?.resData?.info;
    let {deliveryTime} = props?.resData?.info?.sla;
    return (
        <div className="restaurantCard">
            <img src={CDN_URL + cloudinaryImageId} className="restaurantImage"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}


export default RestaurantCard;