import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../redux/actions";
import axios from "axios";
import style from "../styles/FormPage.module.css";
import validation from "../validation/validation";

const FormPage = () => {
  const allCountries = useSelector((state) => state.allCountries);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    difficulty: 0,
    duration: 0,
    season: "",
    countries: [],
    moneda:""
  });

  const [errors,setErrors]=useState({
    name: "",
    difficulty: 0,
    duration: 0,
    season: "",
    countries: []
  })

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
    setErrors(validation({
      ...form,[event.target.name]: event.target.value
  }))
  };



  const handleCountrySelection = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setForm((prevForm) => ({
      ...prevForm,
      countries: [...prevForm.countries, ...selectedOptions]
    }));
  
 
  
   
  };
  

  const submitHandler = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/activities", {
        ...form,
        countries: form.countries
      })
      .then((res) => {
        alert("La actividad se creó exitosamente");
        dispatch(getActivities());
      })
      .catch((err) => {
        alert("Error al crear la actividad");
      });
  };
  
 
  return (
    <form onSubmit={submitHandler} className={style.contenedor}>

      <div className={style.formGroup}>

        <label htmlFor="name">Name*obligatorio</label>
        <input type="text" id="name" value={form.name} name="name" onChange={changeHandler} />
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div className={style.formGroup}>
      <label htmlFor="moneda">Moneda  </label>
      <input type="text"  value={form.moneda} name="moneda" onChange={changeHandler}/>



      </div>

      <div className={style.formGroup}>
        <label htmlFor="duration">Duration*obligatorio</label>
       
        <select value={form.duration} id="duration" name="duration" onChange={changeHandler}>
          <option value="">Select Time:</option>
          <option value="30">30 min</option>
          <option value="40">40 min</option>
          <option value="60">60 min</option>
          <option value="90">90 min</option>
          <option value="120">120 min</option>
        </select>
        {errors.duration && <p>{errors.duration}</p>}




      <div className={style.formGroup}>
        <label htmlFor="countries">Country*obligatorio</label>
        <select id="countries" name="countries" multiple value={form.countries} onChange={handleCountrySelection}>
          {allCountries?.map((country) => (
            <option value={country.id} key={country.id}>
              {country.name}
            </option>
          ))}
        </select>
          
      </div>
      
      
      </div>
      <div className={style.formGroup}>
        <label htmlFor="difficulty">Difficulty*obligatorio</label>
        <select value={form.difficulty} id="difficulty" name="difficulty" onChange={changeHandler}>
          <option value="">Select difficulty</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div className={style.formGroup}>
        <label htmlFor="season">Season*obligatorio:</label>
        <select value={form.season} id="season" name="season" onChange={changeHandler}>
          <option value="">Select Season</option>
          <option value="Verano">Verano</option>
          <option value="Invierno">Invierno</option>
          <option value="Primavera">Primavera</option>
          <option value="Otoño">Otoño</option>
        </select>
      </div>



      <button type="submit" className={style.enviar} >Create Activity</button>
    </form>
  );
};

export default FormPage;


