const { Activity, Country } = require("../db");


const activities = async () => {
  try {
    const results = await Activity.findAll({ include: Country });
    return results;
  } catch (error) {
    throw new Error("Error al obtener las actividades: " + error.message);
  }
};

module.exports = activities;

