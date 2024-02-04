import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureLow } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";

const Detailss = () => {
  const [img, setImg] = useState(
    "https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg?auto=compress&cs=tinysrgb&w=600"
  );
  const location = useLocation();
  const temp = location.state.data.main.temp;
  const temperature = Math.round(temp - 273);
  useEffect(() => {
    const imgStatus = () => {
      switch (location.state.data.weather[0].description) {
        case "clear sky":
          setImg(
            "https://img.freepik.com/free-photo/white-cloud-blue-sky_74190-2381.jpg?size=626&ext=jpg"
          );
          break;
        case "overcast clouds":
          setImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwUghk-_DGoii9QIbOhBKzpm1-D_nSkzPdHBFPneWDZ9V9s1iX6uBJKbULrY4MTdNgLs4&usqp=CAU");
          break;
        case "haze":
          setImg(
            "https://www.shutterstock.com/shutterstock/photos/1672225117/display_1500/stock-photo-the-pine-forest-in-the-valley-in-the-morning-is-very-foggy-the-atmosphere-looks-scary-dark-tone-1672225117.jpg"
          );
          break;
        case "few clouds":
          setImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKFslJA973MSKjgK7rds7LsDewRxzbJxPXWQlCSDdCe7Ui1dopI3mnBGoKygoxU8Q6qr8&usqp=CAU");
          break;
        default:
          setImg(
            "https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg?auto=compress&cs=tinysrgb&w=600"
          );
      }
    };

    imgStatus();
  }, [location.state.data.weather]);
  return (
    <>
      <section className="bg-blue-500 h-screen flex justify-center items-center">
        <div className="bg-white  rounded w-96 relative">
          <div className="text-xl text-blue-500 drop-shadow-md border-b-2 py-5 pr-5 pl-3 mb-10">
            <Link
              to="/"
              className="rounded-full border border-transparent bg-indigo-600 px-2 py-1 text-center font-medium text-white hover:bg-indigo-700 mr-2"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            Weather App
          </div>
          <div className="flex justify-center items-center mb-6">
            <div className="statusimg-responsive w-40 h-40 shadow-lg rounded-full">
              <img
                src={img}
                alt="weatherimg"
                className="rounded-full w-full h-full object-cover shadow-xl"
              />
            </div>
          </div>
          <h1 className="text-center text-4xl mb-3 font-medium">
            {temperature}
            <sup>°</sup>C
          </h1>
          <span className="block text-center mb-3 font-medium">
            {location.state.data.weather[0].description}
          </span>
          <p className="text-center mb-5 font-medium">
            <FontAwesomeIcon icon={faLocationDot} className="text-blue-500" />
            <span>{location.state.data.sys.country}</span>,
            {location.state.data.name}
          </p>
          <div className="flex justify-between items-center px-5 border-t-2">
            {/*  */}
            <div className="flex justify-between items-center border-r-2 pr-20 pt-2 gap-3 pb-2">
              <span className="text-blue-500">
                <FontAwesomeIcon icon={faTemperatureLow} />
              </span>
              <div>
                <h3 className="font-medium text-left">
                  {location.state.data.main.humidity}
                  <sup>°</sup>C
                </h3>
                <span>Humidity</span>
              </div>
            </div>
            {/*  */}
            <div className="flex justify-between items-center pt-2 gap-3 pb-2">
              <span className="text-blue-500">
                <FontAwesomeIcon icon={faDroplet} />
              </span>
              <div>
                <h3 className="font-medium text-left">
                  {location.state.data.main.pressure}
                  <sup>°</sup>C
                </h3>
                <span>Pressure</span>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Detailss;
