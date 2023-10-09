const { Router } = require("express");

const userRoutes = require("./user");
const contactRoutes = require("./contact")
const router = Router();

router.use("/", userRoutes);
router. use("/",contactRoutes)


module.exports = router;