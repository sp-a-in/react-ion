import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";


let Body = () => {

    let [resData2, setResData] =  useState([]);

    let fetchData = async () => {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100")
        console.log('data: ', data);
        const data2 = await data.json();
        console.log('data2: ', data2?.data.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        let extractedData = data2?.data.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log('extractedData: ', extractedData);
        setResData(extractedData)
    }

    useEffect(()=> {
        console.log("UseEffect ke andar");
        fetchData();
    }, [])

    console.log("Body ke andar");
    if(!resData2.length) {
        return (
            <div>Loading.........</div>
        )
    }
    return (
        <div className="body">
            <div className="searchBar">
                <span>Search</span>
                <img src="https://img.icons8.com/?size=100&id=132&format=png&color=000000" className="searchIcon" />
            </div>
            <div className="filterButton">
                <button onClick={()=> {
                    resData2 = resData2.filter((restaurant)=> {
                        return restaurant.info.avgRating > 4.3;
                    })
                    setResData(resData2)  
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="restaurants">
                {
                    resData2.map((restaurant) => (
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