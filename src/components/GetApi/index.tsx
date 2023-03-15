import React, { useEffect, useState } from "react";
import axios from "axios";

const GetData: React.FC = (city) => {
  useEffect(() => {
    weatherData();
  }, [city]);

  const weatherData = async (): Promise<void> => {
    try {
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5a6a3604d50f420072819316b2ed23a2`
      )
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  };
};

export default GetData;
