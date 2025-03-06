import { useParams } from "react-router-dom";
import useRestaurantDetail from "../utils/useRestaurantDetail";
import RestaurantMealCaroousel from "./RestaurantMealCarousel";

const RestaurantDetail = () => {


     let {id} = useParams();

     let restaurantDetail = useRestaurantDetail(id)


    if(!restaurantDetail) {
        return (
            <p>Loading.....</p>
        );
    }

    let {name, avgRating, costForTwoMessage, cuisines} = restaurantDetail?.data?.cards[2]?.card?.card?.info;
    let mealCarsousels = restaurantDetail?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards; 
    let itemCategories = mealCarsousels.filter((mealCarsousel)=> {
        return mealCarsousel?.card?.card['@type'] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory';
    });

    return (
        <div className="text-center">
            <div className="bg-gray-300 w-fit mx-auto my-2.5 p-8 rounded-4xl ">
                <h1 className="font-bold text-orange-700">{ name }</h1>
                <h3>{avgRating}</h3> <p>{costForTwoMessage}</p>
                <h4>{cuisines.join(",")}</h4>
            </div>
            {/* <h3> Recommandations({recommandationList?.length}) </h3>
            <ul>
                {recommandationList.map((restaurant) => {
                    return (
                        <li>{restaurant?.card?.info?.name}</li> 
                    )
                })}
            </ul> */}


            {
                itemCategories.map((itemCategory) => <RestaurantMealCaroousel carouselData={itemCategory} />) 
            }   




        </div>
    )
}

export default RestaurantDetail;