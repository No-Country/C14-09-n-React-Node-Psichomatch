const { Availability, Hour } = require("../db");
const { Op } = require("sequelize");

const getAvailabilityByTherapistId = async (req, res) => {
  try {
    const { id } = req.params;
    const availability = await Availability.findAll({
      where: { TherapistId: id },
    });
    res.status(200).json(availability);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAvailabilityByTherapistIdAndDate = async (req, res) => {
  try {
    const { id } = req.params;
    const { date } = req.body;
    const availability = await Availability.findAll({
      where: { TherapistId: id, date },
     include: [{ model: Hour, attributes: ["hour"] }],
    });
    res.status(200).json(availability);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const get4AvailabilityByTherapistIdAndDate = async (req, res) => {
  try {
    const { id } = req.params;
    const { date } = req.body;

    const nextDate = (num, date) => {
      const fechaSiguiente = new Date(date);
      fechaSiguiente.setDate(fechaSiguiente.getDate() + num);
      const fechaSolo = new Date(
        fechaSiguiente.getFullYear(),
        fechaSiguiente.getMonth(),
        fechaSiguiente.getDate()
      );
      return fechaSolo;
    };

    const availabilityPromises = [0, 1, 2, 3].map(async (x) => {
      return await Availability.findAll({
        where: { TherapistId: id, date: nextDate(x, date) },
        include: [{ model: Hour, attributes: ["hour"] }],
      });

      
    });

    const availability = await Promise.all(availabilityPromises);
    res.status(200).json(availability);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const insertAvailability = async (req, res) => {
  try {
    const { date, TherapistId, HourId } = req.body;
    const availability = await Availability.create({
      date,
      TherapistId,
      HourId,
    });
    res.status(200).json(availability);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const fillAvailability = async (Availability) => {
  try {
     await Availability.bulkCreate([
      {
        TherapistId: 1,
        HourId: 1,
        date: new Date(2023, 10-1, 19),
      },
      {
        TherapistId: 1,
        HourId: 2,
        date: new Date(2023, 10-1, 19),
      },

      {
        TherapistId: 1,
        HourId: 4,
        date: new Date(2023, 10-1, 19),
      },
      {
        TherapistId: 1,
        HourId: 1,
        date: new Date(2023, 10-1, 20),
      },
      {
        TherapistId: 1,
        HourId: 1,
        date: new Date(2023, 10-1, 21),
      },
      {
        TherapistId: 1,
        HourId: 1,
        date: new Date(2023, 10-1, 22),
      },

      {
        TherapistId: 1,
        HourId: 20,
        date: new Date(2023, 10-1, 23),
      },
    ]);


  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAvailabilityByTherapistId,
  insertAvailability,
  getAvailabilityByTherapistIdAndDate,
  fillAvailability,
  get4AvailabilityByTherapistIdAndDate
};