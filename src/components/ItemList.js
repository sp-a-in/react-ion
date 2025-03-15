import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../stores/slices/cartSlice";

const ItemList = ({item}) => {
    const dispatch = useDispatch();
    let handleAddItem = (item) => {
        dispatch(addItem(item))
    }
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
                <div className="w-32">
                    <button className="w-32 rounded-bl-lg rounded-br-lg border-orange-300 border-2 px-7 py-2 cursor-pointer hover:bg-amber-400 hover:text-amber-50 font-bold text-amber-600" onClick={()=>{(handleAddItem(item))}}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default ItemList;