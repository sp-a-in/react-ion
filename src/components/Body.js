import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

let Body = () => {

    let [resData2, setResData] =  useState([]);
    let [searchText, setSearchText] =  useState([]);
    let [filteredData, setFilteredData] =  useState([]);

    let fetchData = async () => {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100")
        const data2 = await data.json();
        let extractedData = data2?.data.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResData(extractedData)
        setFilteredData(extractedData)
    }

    useEffect(()=> {
        fetchData();
    }, [])

    if(!resData2.length) {
        return (
            <div>Loading.........</div>
        )
    }
    return (
        <div className="body">
        <div className="bodyButtons">
            <div className="searchBar">
                <input className="searchInput" value={searchText} onChange={(e)=> {
                    setSearchText(e.target.value)
                }} />
                <button onClick={()=> {
                    let someData = filteredData.filter((res)=> {
                        return res.info.name.toLowerCase().includes(searchText);
                    })
                    setFilteredData(someData)
                }}>Search</button>
                {/* <img src="https://img.icons8.com/?size=100&id=132&format=png&color=000000" className="searchIcon" onClick={console.log("yes")} /> */}
            </div>
            <div className="filterButton">
                <button onClick={()=> {
                    resData2 = filteredData.filter((restaurant)=> {
                        return restaurant.info.avgRating > 4.3;
                    })
                    setFilteredData(resData2)  
                }}>
                    Top Rated Restaurant
                </button>
            </div>
        </div>
            <div className="restaurants">
                {
                    filteredData.map((restaurant) => (
                        <Link to={"/restaurant/" + restaurant.info.id }  key={restaurant.info.id}><RestaurantCard 
                        resData={restaurant}
                    /></Link>
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