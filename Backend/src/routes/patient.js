const { Router } = require("express");
const router = Router();
const { getpatients,insertPatient,recoverPass,updatePatient,deletePatient, getPatientById } = require("../controllers/patient")



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/patients", getpatients);
router.get("/patient/:id", getPatientById);
router.post("/registerPatient", insertPatient);
router.get("/recoverPass",recoverPass)
router.put("/patient/:id", updatePatient);
router.delete("/patient/:id", deletePatient);

module.exports = router;