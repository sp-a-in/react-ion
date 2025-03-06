import { CDN_URL } from "../utils/constants";

const ItemList = ({item}) => {
    return (
        <div className="flex justify-between border-b-2 p-4 border-gray-400">
            <div className="w-fit">
                <h1 className="text-left text-amber-700 font-bold">{item.card.info.name}</h1>
                <p className="text-left">₹{item.card.info.hasOwnProperty('defaultPrice') ? item.card.info.defaultPrice/100 : item.card.info.price/100}</p>
                <p className="text-left font-bold">{item.card.info.ratings?.aggregatedRating?.rating}({item.card.info.ratings?.aggregatedRating?.ratingCountV2})</p>
                <p className="text-left">{item.card.info.description}</p>
            </div>
            <div className="w-32">
                <img src={CDN_URL+item?.card?.info?.imageId} />
            </div>
        </div>
    )
}

export default ItemList;