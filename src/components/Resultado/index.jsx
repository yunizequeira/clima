import { useState, useEffect } from "react";
import { ClimaHook } from "../../context/ClimaProvider";

const Resultado = () => {
  const [error, setError] = useState(false);
  const [data, setData] = useState("");
  const { result } = ClimaHook();

  useEffect(() => {
    getData();
  }, [result]);

  const getData = async () => {
    if (result === 404) {
      setError(true);
    } else {
      setData(result);
      setError(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full md:w-3/4 bg-white shadow-lg rounded-md py-10 px-2">
      {error ? (
        <div className="bg-red-500 text-white px-3 py-2 uppercase font-bold">Ciudad No encontrada</div>
      ) : (
        data !== 404 &&
        data !== "" && (
          <div className="w-3/4 mx-auto">
            <h3 className="text-2xl text-black">
              El Clima de <span className="text-blue-600">{data.name}</span> es:{" "}
            </h3>
            <div className="p-9">
              <p className="text-4xl font-black text-center">
                {parseInt(data.main.temp - 273.15)}{" "}
                <span className="font-normal">°C</span>
              </p>
              <p className="text-center font-semibold text-blue-700">
                Sensacion de : {parseInt(data.main.temp - 273.15)}°C
              </p>
            </div>
            <div className="p-10 flex justify-evenly w-full mx-auto">
              <div className="flex gap-2">
                <p className="text-lg md:text-xl">Max:</p>
                <p className="text-lg md:text-xl font-black text-center">
                  {parseInt(data.main.temp_max - 273.15)}{" "}
                  <span className="font-normal">°C</span>
                </p>
              </div>
              <div className="flex gap-2">
                <p className="text-lg md:text-xl">Min:</p>
                <p className="text-lg md:text-xl font-black text-center">
                  {parseInt(data.main.temp_min - 273.15)}{" "}
                  <span className="font-normal">°C</span>
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Resultado;
