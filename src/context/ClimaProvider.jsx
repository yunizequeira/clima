import { createContext, useContext, useEffect, useState } from "react";

export const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [result, setResult] = useState("");
  // console.log(result);

  useEffect(() => {
    Fetching();
  }, [city, country]);

  const Fetching = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country} &appid=a1c0564e43787ca6e52bebd926debdb2`;
    if (city !== "" || country !== "") {
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        setResult(data);
      }else{
        setResult(404)
      }
    }
  };

  const hello = "hello world";
  return (
    <ClimaContext.Provider value={{ hello, setCity, setCountry, result }}>
      {children}
    </ClimaContext.Provider>
  );
};

export const ClimaHook = () => useContext(ClimaContext);
export default ClimaProvider;
