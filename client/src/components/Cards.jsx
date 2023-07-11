import Card from "./Card";
import style from "../styles/Cards.module.css";
import { useSelector, useDispatch } from 'react-redux';
import PaginateNew from "./PaginateNew";
import { useEffect  } from "react";
import { getCountries } from "../redux/actions";

const Cards = ({ alfabet }) => {

  
  const allContinents = useSelector((state) => state.allContinents);
  const countries = useSelector((state) => state.countries);
  const numPage = useSelector((state) => state.numPage);
  const dispatch = useDispatch();

  const desde = (numPage - 1) * 10;
  const hasta = numPage * 10;
  const cantPages = Math.floor((alfabet ? countries.length : allContinents.length) / 10);
  const viewCharacters = alfabet ? countries.slice(desde, hasta) : allContinents.slice(desde, hasta);

  useEffect(() => {
    dispatch(getCountries());
    

  }, [dispatch]);
  

  return (
    <div className={style.body}>
      <div className={style.container}>
        {viewCharacters.map((country) => (
          <Card
            key={country.id}
            id={country.id}
            name={country.name}
            flags={country.flags}
            continents={country.continents}
            population={country.population}
            viewCharacters={viewCharacters}
            
          />
        ))}
      </div>


      
     
      

      <PaginateNew cantPages={cantPages}></PaginateNew>
    </div>
  );
};

export default Cards;



















  
  
  
  

  
