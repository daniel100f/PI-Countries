const express = require("express");
const activitiesRouter = express.Router();
const activities = require("../controllers/activities");
const createActivity = require("../controllers/createActivity");

activitiesRouter.get("/", async (req, res) => {
  const results = await activities();
  try {
    if(results.length===0){
      throw new Error ("no exixte actividad")
    }else{
      res.status(200).json(results)
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

activitiesRouter.post("/", async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries,moneda } = req.body;
    
    const newActivity = await createActivity(name, difficulty, duration, season, countries,moneda);
    
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
  
  

module.exports = activitiesRouter;



/* SET client_encoding = 'UTF8' */