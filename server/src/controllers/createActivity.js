const { Activity, Country } = require("../db");

const createActivity = async (name, difficulty, duration, season, countries,moneda) => {
  try {
    if (!name || !difficulty || !duration || !season || !countries || !moneda) {
      throw new Error("Faltan llenar datos obligatorios");
    }
    console.log(moneda);
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
      moneda,
    });

    const countriesToAssociate = await Country.findAll({
      where: { id: countries },
    });

    // Asociar los países a la nueva actividad
    await newActivity.addCountries(countriesToAssociate);

    // Devolver la nueva actividad creada con los países asociados
    return newActivity;
  } catch (error) {
    throw new Error(`Error al crear la actividad turística: ${error.message}`);
  }
};

module.exports = createActivity;

