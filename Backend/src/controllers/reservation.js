const {
  Reservation,
  Availability,
  Hour,
  Patient,
  Therapist,
} = require("../db");
const { Op } = require("sequelize");

const addReservation = async (req, res) => {
  const { AvailabilityId, PatientId, TherapistId } = req.body;
  try {
    const availability = await Availability.findByPk(AvailabilityId);

    if (!availability.status) {
      const reservation = await Reservation.create({
        AvailabilityId,
        PatientId,
        TherapistId,
      });
      await availability.update({ status: true });
      res.status(200).json(reservation);
    } else {
      res.status(400).json(false);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getReservationByTherapistId = async (req, res) => {
  const { id } = req.params;
  try {
    const reservation = await Reservation.findAll({
      where: { TherapistId: id },
      include: [
        {
          model: Availability,
          include: Hour,
        },
        { model: Patient },
      ],
    });
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getReservationByPatientId = async (req, res) => {
  const { id } = req.params;
  try {
    const reservation = await Reservation.findAll({
      where: { PatientId: id },
      include: [
        {
          model: Availability,
          include: Hour,
        },
        { model: Therapist },
      ],
    });
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = {
  addReservation,
  getReservationByTherapistId,
  getReservationByPatientId,
};
