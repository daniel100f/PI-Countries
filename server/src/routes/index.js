const { Router } = require("express");
const countiresRouter=require("./countriesRouter")
const activitiesRouter=require("./activitiesRouter")
const router = Router();

router.use("/countries" , countiresRouter)
router.use("/activities" , activitiesRouter)

module.exports = router;
