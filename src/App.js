import axios from "axios";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const api = {
  key: "6fd10b9fc26cfbb050e211e03946f55c",
  base: "https://api.openweathermap.org/data/2.5/",
};
function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  async function getUser() {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api.key}`
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    getUser();
    setWeather(query);
    setQuery("");
  };

  return;
  <div>
    <TextField id="standard-basic" label="Standard" variant="standard" />
  </div>;
}

export default App;
