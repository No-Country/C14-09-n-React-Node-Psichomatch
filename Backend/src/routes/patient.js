const { Router } = require("express");
const router = Router();
const { getpatients,insertPatient,logInPatient,recoverPass,recoverPass2,updatePatient,deletePatient, getPatientById, inserNewPatient } = require("../controllers/patient")



// Configurar los routers
//Ejemplo: router.use('/auth', authRouter);

router.get("/patients", getpatients);
router.get("/patient/:id", getPatientById);
router.post("/registerPatient", insertPatient);
router.post("/patient", inserNewPatient)
router.post("/patient/login",logInPatient);

router.post("/recoverPass",recoverPass)
router.get("/recoverPass2/:id",recoverPass2)

router.put("/patient/:id", updatePatient);
router.delete("/patient/:id", deletePatient);

module.exports = router;