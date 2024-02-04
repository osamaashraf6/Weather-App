import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchh = () => {
  const [err, setErr] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const API_KEYY = process.env.REACT_APP_API_KEY;
  const fetchData = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEYY}`
    );
    const result = await res.json();
    setData(result);
  };
  useEffect(() => {
    fetchData();
  }, [value]);

  const handleSubmit = () => {
    if (value === "") {
      setErr(true);
    } else {
      fetchData();
      setValue("");
      navigate("/details", { state: { data } });
    }
  };
  return (
    <>
      <section className="bg-blue-500 h-screen flex justify-center items-center">
        <div className="bg-white  rounded w-96  relative pb-5">
          <div className="text-xl text-blue-500 drop-shadow-md border-b-2 p-5 mb-7">
            Weather App
          </div>
          <div className="p-5">
            <div className="flex justify-center items-center pb-4 border-b-2 mb-3">
              <input
                type="text"
                name="search"
                placeholder="Enter city name"
                className="p-2 rounded border-2 w-full mb-5"
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />
            </div>
          </div>
          <span className="block absolute bg-white p-2 top-44  left-1/2 transform -translate-x-1/2 -translate-y-0">
            Or
          </span>
          {err && (
            <p className="text-red-500 font-medium text-center mb-5 drop-shadow-md">
              Wrong city name, try again! 😊
            </p>
          )}
          <div className="flex justify-center items-cente ">
            <button
              className="rounded-md border border-transparent bg-indigo-600 px-10 py-2 text-center font-medium text-white hover:bg-indigo-700"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Searchh;
