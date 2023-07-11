import Cards from "./Cards";
import style from "../styles/HomePage.module.css";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { orderCards, orderContinent, orderPopulation,orderActividad } from "../redux/actions";

const HomePage = () => {
  const dispatch = useDispatch();
  const actividades = useSelector((state) => state.actividades);
  
  const [alfabet, setAlfabet] = useState(false);
  

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAlfabet(true);
  };

  const handleContinents = (event) => {
    dispatch(orderContinent(event.target.value));
    setAlfabet(true);
  };



  const handlePopulation = (event) => {
    dispatch(orderPopulation(event.target.value));
    setAlfabet(true);
  };
  
  
  
  
  
  const handleActivity = (event) => {
    dispatch(orderActividad(event.target.value));
    setAlfabet(true);
  };




  

  return (
    <div className={style.contenedor}>
          <div className={style.filtros}>
         <div >  
        <select onChange={handleActivity} className={style.orden}>
          <option value="All">All Activities</option>
          {actividades.map( (actividad) => (
            <option value={actividad} key={actividad}> {actividad} </option>
            
          ))}
        </select>
      </div> 

        <div >
          <select onChange={handleOrder} className={style.orden}>
            <option value="A">A-Z</option>
            <option value="D">Z-A</option>
          </select>
        </div>

        <div >
          <select onChange={handlePopulation} className={style.orden}>
            <option value="minor">Population minor 10 millions</option>
            <option value="mayor">Population mayor 10 millions</option>
          </select>
        </div>

        <div >
          <select onChange={handleContinents} className={style.orden}>
            <option value="All" key="All">
              All continents
            </option>
            <option value="Africa">Africa</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="Oceania">Oceania</option>
            <option value="South America">South America</option>
          </select>
        </div>
      </div>

      <Cards alfabet={alfabet}  />

    </div>
  );
};

export default HomePage;









