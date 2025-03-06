import { useState } from "react";
import ItemList from "./ItemList"

const RestaurantMealCaroousel = ({carouselData}) => {

    let [showItems, setShowItems] = useState(false);

    let handleCarousel = ()=> {
        setShowItems(!showItems)
    }

    return (
        <div className="flex flex-col w-6/12 mx-auto cursor-pointer my-8 border-b border-gray-400 pb-4" onClick={handleCarousel}>
            <div className="flex justify-between">
                <h1 className="font-bold">{carouselData?.card?.card?.title}({carouselData?.card?.card?.itemCards.length})</h1>
                <span>⬇️</span>
            </div>
            <div>
              {showItems && carouselData?.card?.card?.itemCards.map((item)=> <ItemList item={ item } />)}
            </div>
        </div>
    )
}

export default RestaurantMealCaroousel