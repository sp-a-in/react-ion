import { CDN_URL } from "../utils/constants";

let RestaurantCard = (props) => {
    let {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = props?.resData?.info;
    let {deliveryTime} = props?.resData?.info?.sla;
    return (
        <div className="w-md bg-lime-500 p-4 rounded-4xl hover:bg-yellow-600">
            <img src={CDN_URL + cloudinaryImageId} className="w-[200px] h-[200px]"/>
            <h3 className="text-amber-800 font-bold">{name}</h3>
            <h4 className="break-words">{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

export let RestaurantCardWithLabel = (RestaurantCard)=> {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-amber-100 rounded-md p-2 m-0   ">Upto {props?.resData.info?.aggregatedDiscountInfoV3?.header}</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}


export default RestaurantCard;