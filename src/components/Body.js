import { Link } from "react-router-dom";
import RestaurantCard, { RestaurantCardWithLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineSatus";

let Body = () => {

    let [resData2, setResData] =  useState([]);
    let [searchText, setSearchText] =  useState([]);
    let [filteredData, setFilteredData] =  useState([]);
    let isOnline = useOnlineStatus()
    let RestaurantCardWithLabels = RestaurantCardWithLabel(RestaurantCard);

    let fetchData = async () => {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        console.log('data: ', data);
        const data2 = await data.json();
        console.log('data2: ', data2);
        let extractedData = data2?.data.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log('extractedData: ', extractedData);
        setResData(extractedData)
        setFilteredData(extractedData)
    }

    useEffect(()=> {
        fetchData();
    }, [])

    if(!isOnline) {
        return (
            <h1>You're offlline. Please check your internet connection</h1>
        )
    } 

    if(!resData2.length) {
        return (
            <div>Loading.........</div>
        )
    }
    return (
        <div className="body">
        <div className="flex p-3 gap-4 items-center">
            <div className="flex gap-2">
                <input className="border-2 border-amber-950 rounded-md" value={searchText} onChange={(e)=> {
                    setSearchText(e.target.value)
                }} />
                <button className="bg-emerald-400 p-2 rounded-2xl hover:bg-amber-300 cursor-pointer" onClick={()=> {
                    let someData = filteredData.filter((res)=> {
                        return res.info.name.toLowerCase().includes(searchText);
                    })
                    setFilteredData(someData)
                }}>Search</button>
                {/* <img src="https://img.icons8.com/?size=100&id=132&format=png&color=000000" className="searchIcon" onClick={console.log("yes")} /> */}
            </div>
            <div className="bg-emerald-400 p-2 rounded-2xl hover:bg-amber-300 cursor-pointer">
                <button className="cursor-pointer" onClick={()=> {
                    resData2 = filteredData.filter((restaurant)=> {
                        return restaurant.info.avgRating > 4.3;
                    })
                    setFilteredData(resData2)  
                }}>
                    Top Rated Restaurant
                </button>
            </div>
        </div>
            <div className="flex flex-wrap gap-8">
                {
                    filteredData.map((restaurant) => (
                        <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
                            { restaurant.info?.aggregatedDiscountInfoV3?.header.includes('OFF') ?
                                < RestaurantCardWithLabels resData={restaurant} /> :  <RestaurantCard
                                resData={restaurant}
                            />    
                            }
                        </Link>
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