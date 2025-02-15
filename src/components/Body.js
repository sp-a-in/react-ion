import RestaurantCard from "./RestaurantCard";
import resData from "../utils/dummyData";

let Body = () => {
    return (
        <div className="body">
            <div className="searchBar">
                <span>Search</span>
                <img src="https://img.icons8.com/?size=100&id=132&format=png&color=000000" className="searchIcon" />
            </div>
            <div className="restaurants">
                {/* <RestaurantCard resData={resData[0]}/>
                <RestaurantCard resData={resData[1]}/> */}
                {
                    resData.map((restaurant) => (
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