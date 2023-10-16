const { Router } = require("express");
const router = Router();
const {
    createTherapist,
    addInfoTherapist,
    updateDescriptionTherapist,
    updateImgTherapist,
    updateTherapistPrice,
    updateTherapistPriceByPorcent,
    deleteTherapist,
    switchTherapistState,
    getTherapists
} = require("../controllers/therapist")

router.get("/", getTherapists);
router.post("/create", createTherapist)
router.put("/addInfo/:id", addInfoTherapist)
router.put("/changeDescription/:id", updateDescriptionTherapist)
router.put("/updateImg/:id", updateImgTherapist)
router.put("/updatePrice/:id", updateTherapistPrice)
router.put("/updatePricePercent/:id", updateTherapistPriceByPorcent)
router.delete("/delete/:id", deleteTherapist)   
router.put("/switchTherapist/:id", switchTherapistState)

module.exports = router;