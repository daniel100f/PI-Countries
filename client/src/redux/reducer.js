import { GET_ALL, NEXT_PAGE, PREV_PAGE, ORDER, ORDER_CONTINENT, ORDER_POPULATION, BUSCAR_NAME_COUNTRY, ACTIVIDAD,ORDER_ACTIVIDAD } from "./action-types";

const initialState = {
  actividades: [],
  population: [],
  allContinents: [],
  countries: [],
  nameCountry: [],
  allCountries: [],
  numPage: 1,
  
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case NEXT_PAGE:
      return {
        ...state,
        numPage: state.numPage + 1,
      };

    case PREV_PAGE:
      return {
        ...state,
        numPage: state.numPage - 1,
      };

    case GET_ALL:
      const population = payload.map((country) => ({
        ...country,
        population: country.population,
      }));

      return {
        ...state,
        allCountries: payload,
        countries: payload,
        allContinents: payload,
        population: population,
      };

    case ORDER:
      const orderCountries = payload === "A"
        ? state.countries.slice().sort((a, b) => a.name.localeCompare(b.name))
        : state.countries.slice().sort((a, b) => b.name.localeCompare(a.name));

      return {
        ...state,
        
        countries: orderCountries,
      };

    case ORDER_CONTINENT:
      const filteredCountries = payload === "All"
        ? state.allCountries
        : state.allCountries.filter((country) => country.continents === payload);

      return {
        ...state,
        allContinents: filteredCountries,
        countries: filteredCountries,
      };

      case ORDER_POPULATION:
        const populationFilter = payload === "minor"
          ? state.allCountries.filter((country) => country.population < 10000000)
          : state.allCountries.filter((country) => country.population > 10000000);
      
        return {
          ...state,
          countries: populationFilter,
        
      };

    case BUSCAR_NAME_COUNTRY:
      return {
        ...state,
        nameCountry: payload,
      };

    case ACTIVIDAD:
      return {
        ...state,
        actividades: payload.map((e)=>e=e.name),
      };

   
        case ORDER_ACTIVIDAD:
          return{...state,
          
          countries:state.allCountries.filter((element)=>element.Activities.find(e=>e.name===payload))
          }
        
        
         default:
      return {...state};
  }
};

export default reducer;











