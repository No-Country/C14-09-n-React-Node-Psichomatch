const { Router } = require("express");
const router = Router();
const {
   addReservation,
   getReservationByTherapistId,
   getReservationByPatientId
} = require("../controllers/reservation")


router.post("/", addReservation)
router.get("/therapist/:id", getReservationByTherapistId)
router.get("/patient/:id", getReservationByPatientId)

module.exports = router;