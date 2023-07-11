const {Country,Activity}=require("../db")

const getAllCountries=async()=>{
    try {
        const countries = await Country.findAll({include:Activity});
        return countries;
      } catch (error) {
        throw new Error("Error al recuperar países de la base de datos");
      }

};
 

const searchcountriesyName = async (name) => {
  try {
    const countriesList = await getAllCountries();
    const matchingCountries = countriesList.filter(
      (country) => country && country.name && country.name.toLowerCase().includes(name.toLowerCase())
    );

    return matchingCountries;
  } catch (error) {
    throw new Error("No se encontraron países con el nombre especificado.");
  }
};




module.exports={getAllCountries, searchcountriesyName};