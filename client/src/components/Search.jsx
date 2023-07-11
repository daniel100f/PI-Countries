import { useDispatch } from "react-redux";
import style from "../styles/Search.module.css";
import { useState } from "react";
import { getName } from "../redux/actions";
import { NavLink, useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [searchCountry, setSearchCountry] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const handleSearch = () => {
    if (searchCountry) {
      dispatch(getName(searchCountry));
      navigate(`/ByName/${searchCountry}`);
    } else {
      setSearchCountry("")
      alert("No se ha ingresado ningún país");
      
    }
  };
  
  
  

  return (
    <div className={style.container}>
      <input
        type="search"
        className={style.input}
        value={searchCountry}
        onChange={(event) => setSearchCountry(event.target.value)}
      />
      <NavLink to={`/ByName/${searchCountry}`}>
        <button className={style.buscar} onClick={handleSearch}>
          Search
        </button>
      </NavLink>
    </div>
  );
}















/* import { useState } from "react";
import {  getName } from "../redux/actions";
import { useDispatch } from "react-redux";


export default function Search() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(getName(name));
    setName("");
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className={style.search}>
      <input type="search" className={style.input} value={name} onChange={handleChange} />
      <button className={style.buscar} onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
} */