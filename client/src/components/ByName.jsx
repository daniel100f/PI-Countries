import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import style from "../styles/Detail.module.css";

const ByName = () => {
  const { name } = useParams();
  const [country, setCountry] = useState({});



  useEffect(() => {
  axios(`http://localhost:3001/countries?name=${name}`)
    .then(({ data }) => {
      console.log(data); 
      if (data) { // Verificar si se recibieron datos en forma de array
        setCountry(data[0]); // Asignar el primer objeto del array al estado country
      }else if(!data.name){setCountry("")} 
      else {
        window.alert("No hay país con ese name");
      }
    });
    

  return () => {
    setCountry({}); // Restablecer el estado country al desmontar el componente
  };
}, [name]);

  

  return (
    <div className={style.contenedor}>
      <div className={style.caracteristicas}>
      <p className={style.detalle}>Id: {country.id}</p>
      <h1 className={style.detalle}>Country: {country.name}</h1>
      <p className={style.detalle}>Continent: {country.continents}</p>
      <p className={style.detalle}>Capital: {country.capital}</p>
      <p className={style.detalle}>Subregion: {country.subregion}</p>
      <p className={style.detalle}>Area: {country.area}</p>
      <p className={style.detalle}>Population: {country.population}</p>
      </div>


      <div className={style.caracteristicas}>
      
       
        {country.Activities?.map((element) => (
          <div key={element.name + "actividad"}>
            
            <span>Actividad: {element.name}</span> <br />
           
            <span>Duration: {element.duration}</span><br />

            
            <span>Difficulty: {element.difficulty}</span><br />
            
            <span>Season: {element.season}</span>
          </div>
        ))}
      
    </div>
    



       <div className={style.imagen}>
       <img src={country.flags} alt={country.name}  />
       </div>
       
       </div>
  );
};

export default ByName;

