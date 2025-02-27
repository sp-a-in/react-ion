import { useState, useEffect } from "react";

let useRestaurantDetail = (id) => {
         let [restaurantDetail, setRestaurantDetail] = useState(null);

         useEffect(()=> {
            fetchRestaurant();
        }, []);
    
        const fetchRestaurant = async () => {
            let response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.97530&lng=77.59100&restaurantId="+id);
            let restaurantData = await response.json();
            console.log('restaurantData: ', restaurantData);
            setRestaurantDetail(restaurantData);
        }
    return restaurantDetail;
}

export default useRestaurantDetail;
