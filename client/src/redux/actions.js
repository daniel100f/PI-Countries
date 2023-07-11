import {GET_ALL,NEXT_PAGE,PREV_PAGE,COUNTRY_ID,ORDER,ORDER_CONTINENT,ORDER_POPULATION,BUSCAR_NAME_COUNTRY,ACTIVIDAD,ORDER_ACTIVIDAD} from "./action-types"
import axios from "axios";



export const  nextPage=()=>{
  return {type: NEXT_PAGE}
}

export const  prevPage=()=>{
  return {type: PREV_PAGE}
} 
export const getCountries = () => {
  return async function(dispatch){
    const apiData=await axios.get("http://localhost:3001/countries");
   
    const paises=apiData.data;
    dispatch({type:GET_ALL,payload:paises})
  }
  };

  export const getCountry = (id) => {
    return async function(dispatch){
      const apiData=await axios.get(`http://localhost:3001/countries${id}`);
      const paises=apiData.data;
      dispatch({type:COUNTRY_ID,payload:paises})
    }
    };

    export const getName = (name) => {
      return async function(dispatch){
        const apiData=await axios.get(`http://localhost:3001/countries?name=${name}`);
        const paises=apiData.data;
        dispatch({type:BUSCAR_NAME_COUNTRY,payload:paises})
      }
      };

         
  export const orderCards=(orden)=>{
   return {type:ORDER,payload:orden}
  } 
  
  export const orderContinent=(continent)=>{
    return {type:ORDER_CONTINENT,payload:continent}
   }

   export const orderPopulation=(population)=>{
    return {type:ORDER_POPULATION,payload:population}
   }

   export const orderActividad=(actividad)=>{
     return {type:ORDER_ACTIVIDAD,payload:actividad}
    }
        export const getActivities = () => {
        
        return function(dispatch){
          
          fetch("http://localhost:3001/activities")
          .then((response) => response.json())
          .then((data) => dispatch({type: ACTIVIDAD, payload: data}))
         }
       } 
 
       













       
    
    /*  export const getName = (name) => {
       console.log("name:"+name);
       return function(dispatch){
           fetch(`http://localhost:3001/countries?name=${name}`)
         .then((response) => response.json())
         .then((data) => dispatch({type: BUSCAR_NAME_COUNTRY, payload: data}))
       }
      } */
      /*  export const getActivities = () => {
        console.log("soy action");
        return function(dispatch){
          
          fetch("http://localhost:3001/activities")
          .then((response) => response.json())
          .then((data) => dispatch({type: GET_ACTIVITY, payload: data}))
         }
       } */
     /*  export const getActivities = () => {
        
        return async function(dispatch){
          const apiData=await axios.get("http://localhost:3001/activities");
          
          const actividad=apiData.data;
          dispatch({type:ACTIVIDAD,payload:actividad})
        }
      }; */