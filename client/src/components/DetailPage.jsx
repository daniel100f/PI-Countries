import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import style from "../styles/Detail.module.css"

const DetailPage = () => {
  const { id } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/countries/${id}`).then(({ data }) => {
      if (data.name) {
        setCountry(data);
      } else {
        window.alert("No hay país con ese ID");
      }
    });

    return () => {
      setCountry({});
    }; 
  }, [id]) ;


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
            <span>moneda: {element.moneda}</span>
            
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

export default DetailPage;
