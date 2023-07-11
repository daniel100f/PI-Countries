const express=require("express")
const countriesRouter=express()
const {getAllCountries,searchcountriesyName}=require("../controllers/getAllCountries")
const {Country,Activity}=require("../db")


countriesRouter.get("/", async (req, res) => {
      try {
        const { name } = req.query;
        const results = name ? await  searchcountriesyName(name) : await getAllCountries();
    
        if (results.length > 0) {
          res.status(200).json(results);
        } else {
          res.status(404).json({ error: "No se encontraron países con el nombre especificado" });
        }
      } catch (error) {
        res.status(500).json({ error: "Error al obtener los países" });
      }
    });
    

countriesRouter.get("/:id",async(req,res)=>{
   
   try {
    const { id } = req.params;
    const country = await Country.findOne({
      where: { id },
      include: { model: Activity }
    });
    

    if (country) {
      res.json(country);
    } else {
      res.status(404).json({ error: 'País no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al recuperar el país' });
  }
  
})


  





module.exports=countriesRouter;