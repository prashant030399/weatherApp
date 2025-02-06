import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4a742e9f73c74c388ee4383ef58d341d`;
        const response = await fetch(url);
        const resJson = await response.json();

        if (resJson.main) {
          setCity(resJson.main); //  Safe update
        } else {
          setCity(null); //  Reset if no valid data
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setCity(null); //  Handle error by resetting state
      }
    };

    fetchApi();
  }, [search]); //  Correct dependency

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputfield"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        {!city ? (
          <p>No Data found</p>
        ) : (
          <div>
            <br />
            <br />
            <br />
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i> {search}
              </h2>

              <h1 className="temp">{city.temp}°Cel</h1>
              <h3 className="tempmin_max">
                Min: {city.temp_min}°Cel | Max: {city.temp_max}°Cel
              </h3>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;



