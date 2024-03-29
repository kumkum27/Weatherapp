import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {

    const [search,setsearch]=useState("Mumbai");
    const [city,setcity]=useState(null);

    useEffect(()=>{
        const fetchapi= async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3066830e6de2602f2935e432cbb5d366`
            const fetching= await fetch(url);
            const apijson= await fetching.json();
            // console.log(apijson);
            setcity(apijson.main);
        };
        fetchapi();
    },[search])

    return (
        <React.Fragment>
            <div className="box">
                <div className="one_div">
                    <input
                    type="search"
                    value={search}
                    className="inputfield"
                    onChange={(event)=>{setsearch(event.target.value)}} />
                </div>

            {!city ? (
                <p className="nodata">No Data is Found</p>
            ) : (
                <div className="two_div">
                    <h1 className="location">{search}</h1>
                    <h2 className="temp">{city.temp}°C</h2>
                    <h3 className="minmax">Max:{city.temp_max}°C | Min:{city.temp_min}°C</h3>
                </div>
            )
            }
            </div>
        </React.Fragment>
    )
}

export default Tempapp;