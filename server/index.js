const { conn, Country } = require('./src/db');
const axios = require('axios');
const server = require('./src/server');

const PORT = 3001;

conn.sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });

    axios.get("http://localhost:5000/countries").then(({ data }) => {
      const countries = [];
      data.forEach((country) => {
       
        const newCountry = {
          id: country.cca3,
          name: country.name.common,
          flags: country.flags.png,
          continents: country.continents[0],
          capital: Array.isArray(country.capital)
            ? country.capital[0]
            : "Sin capital",
          subregion: country.subregion ? country.subregion : "Sin region",
          area: country.area,
          population: country.population,
        };
        countries.push(newCountry);
      });
      Country.bulkCreate(countries)
        .then(() => {
          console.log("DB cargada con éxito");
        })
        .catch((error) => {
          console.log(error.message);
        });
    });

  }).catch(error => console.error(error));













