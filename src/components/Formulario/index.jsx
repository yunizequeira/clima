import { useState } from "react";
import { ClimaHook } from "../../context/ClimaProvider";
import Error from "../Error";

const Formulario = () => {
  const { setCity, setCountry } = ClimaHook();
  const [state, setState] = useState({ ciudad: "", pais: "" });
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.ciudad == "" || state.pais == "") {
      setError(true);
    } else {
      setCity(state.ciudad);
      setCountry(state.pais);
      setError(false);
    }
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className=" w-full md:w-3/4 bg-white shadow-lg rounded-md py-10 px-2 ">
      {error ? <Error /> : ""}
      <form
        className=" flex justify-center items-center py-10 px-2"
        onSubmit={handleSubmit}
      >
        <div className=" w-3/4 text-lg font-medium flex flex-col gap-4 ">
          <div className="flex flex-col w-full">
            <label htmlFor="ciudad">Ciudad</label>
            <input
              type="text"
              name="ciudad"
              id="ciudad"
              className="rounded-lg w-full h-10 bg-inherit border p-2"
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex flex-col w-full ">
            <label htmlFor="pais">Pais</label>
            <select
              name="pais"
              id="pais"
              className="rounded-md w-full h-10 bg-inherit border"
              onChange={handleChange}
            >
              <option value="">--Select your country--</option>
              <option value="US">Estados Unidos</option>
              <option value="MX">México</option>
              <option value="AR">Argentina</option>
              <option value="CO">Colombia</option>
              <option value="CR">Costa Rica</option>
              <option value="ES">España</option>
              <option value="PE">Perú</option>
              <option value="IT">Italia</option>
              
            </select>
          </div>
          <button className="text-center text-white font-bold uppercase bg-blue-800 w-full px-8 py-2">
            Consultar Clima
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
