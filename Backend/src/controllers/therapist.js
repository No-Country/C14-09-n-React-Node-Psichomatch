const { Therapist } = require("../db");
const { fillTherapistData } = require("../common/filledDates");

// Functions for therapist CRUD
const getTherapists = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = 6;
    const offset = (page - 1) * perPage;
    const limit = perPage;
    const therapists = await Therapist.findAll({
      offset,
      limit,
      order: [["id", "ASC"]],
    });

    const totalCount = await Therapist.count();

    const totalPages = Math.ceil(totalCount / perPage);
    res.status(200).json({ therapists, totalPages });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTherapist = async (req, res) => {
  try {
    const { name, lastName, adress } = req.body;
    if (!name || !lastName || !adress)
      return res.status(400).json({ error: "Missing fields" });
    const therapist = await Therapist.create({
      name: name,
      lastName: lastName,
      adress: adress,
    });
    res.status(201).json(therapist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addInfoTherapist = async (req, res) => {
  try {
    const { id } = req.params;
    const { languages, phone, image, description } = req.body;
    const therapist = await Therapist.findByPk(id);

    if (!therapist)
      return res.status(404).json({ error: "Therapist not found" });

    const updatedTherapist = await therapist.update({
      languages: languages,
      phone: phone,
      image: image,
      description: description,
    });

    res.status(200).json(updatedTherapist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateDescriptionTherapist = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const therapist = await Therapist.findByPk(id);

    if (!therapist)
      return res.status(404).json({ error: "Therapist not found" });

    const updatedTherapist = await therapist.update({
      description: description,
    });

    res.status(200).json(updatedTherapist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateImgTherapist = async (req, res) => {
  try {
    const { id } = req.params;
    const { image } = req.body;
    const therapist = await Therapist.findByPk(id);

    if (!therapist)
      return res.status(404).json({ error: "Therapist not found" });

    // const updatedTherapist = await therapist.update({
    //     image: image
    // });
    // Ver como funciona el cambio de img con servicios como con cloudinary

    res.status(200).json(updatedTherapist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar Precios de Terapia -> (Hora)
const updateTherapistPrice = async (req, res) => {
  try {
    const { id } = req.params;
    const { price } = req.body;
    const therapist = await Therapist.findByPk(id);

    if (!therapist)
      return res.status(404).json({ error: "Therapist not found" });

    const updatedTherapist = await therapist.update({
      price: price,
    });

    res.status(200).json(updatedTherapist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTherapistPriceByPorcent = async (req, res) => {
  try {
    const { id } = req.params;
    const { porcent } = req.body;

    if (!porcent) return res.status(400).json({ error: "Missing fields" });
    if (porcent < 0 || porcent > 100)
      return res
        .status(400)
        .json({ error: "Porcent must be between 0 and 100" });
    const therapist = await Therapist.findByPk(id);

    if (!therapist)
      return res.status(404).json({ error: "Therapist not found" });

    const price = therapist.price;
    const newPrice = price + (price * porcent) / 100;

    const updatedTherapist = await therapist.update({
      price: newPrice.toFixed(2),
    });

    res.status(200).json(updatedTherapist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateLanguagesTherapist = async (req, res) => {
  try {
    const { id } = req.params;
    const { languages } = req.body;
    const therapist = await Therapist.findByPk(id);

    if (!therapist)
      return res.status(404).json({ error: "Therapist not found" });

    const updatedTherapist = await therapist.update({
      languages: languages,
    });

    res.status(200).json(updatedTherapist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTherapist = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "Missing fields" });
    await Therapist.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({ message: "Therapist deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Aditional functions for therapist
const switchTherapistState = async (req, res) => {
  try {
    const { id } = req.params;
    const therapist = await Therapist.findByPk(id);

    if (!therapist)
      return res.status(404).json({ error: "Therapist not found" });

    const updatedTherapist = await therapist.update({
      isActive: !therapist.isActive,
    });

    res.status(200).json(updatedTherapist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --> FILL <--

const fillTherapist = async (Therapist) => {
  try {
    // fillTherapistData --> Array de Objetos
    // Está hecho en /common/filledDates.js 
    await Therapist.bulkCreate(fillTherapistData);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getTherapists,
  createTherapist,
  addInfoTherapist,
  updateDescriptionTherapist,
  updateImgTherapist,
  updateTherapistPrice,
  updateTherapistPriceByPorcent,
  updateLanguagesTherapist,
  deleteTherapist,
  switchTherapistState,
  fillTherapist,
};
