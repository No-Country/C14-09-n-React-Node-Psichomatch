const { Router } = require("express");
const router = Router();
const {
  getAvailabilityByTherapistId,
  getAvailabilityByTherapistIdAndDate,
  insertAvailability,
  get4AvailabilityByTherapistIdAndDate,
  getAvailabilityHourByTherapistIDByDateBy
} = require("../controllers/availability")
router.post("/hour", getAvailabilityHourByTherapistIDByDateBy)
router.post("/dates/:id", get4AvailabilityByTherapistIdAndDate);
router.post("/:id", getAvailabilityByTherapistIdAndDate);
router.post("/create/:id", insertAvailability)


module.exports = router;