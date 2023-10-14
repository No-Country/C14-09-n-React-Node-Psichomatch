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
    const {
      name,
      lastName,
      adress,
      price,
      phone,
      image,
      description,
      email,
      password,
    } = req.body;
    if (!name || !lastName || !adress)
      return res.status(400).json({ error: "Missing fields" });
    await Therapist.create({
      name: name,
      lastName: lastName,
      adress: adress,
      price: price || "",
      phone: phone || "",
      image: image || "",
      description: description || "",
      email: email || "",
      password: password || "",
    });
    res.status(201).json({ message: "Therapist created" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addInfoTherapist = async (req, res) => {
  try {
    const { id } = req.params;
    const { phone, image, description } = req.body;
    console.log("id", id);

    if (!id || !phone || !image || !description)
      return res.status(400).json({ error: "Missing fields" });

    const therapist = await Therapist.findByPk(id);

    if (!therapist)
      return res.status(404).json({ error: "Therapist not found" });

    await therapist.update({
      phone: phone,
      image: image,
      description: description,
    });

    res.status(202).json({ message: "Therapist updated" });
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

    await therapist.update({
      description: description,
    });

    res.status(202).json({ message: "Description of therapist updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateImgTherapist = async (req, res) => {
  try {
    const { id } = req.params;
    const { image } = req.body;

    if (!id || !image) return res.status(400).json({ error: "Missing fields" });

    const therapist = await Therapist.findByPk(id);

    if (!therapist)
      return res.status(404).json({ error: "Therapist not found" });

    // const updatedTherapist = await therapist.update({
    //     image: image
    // });
    // Ver como funciona el cambio de img con servicios como con cloudinary

    res.status(202).json({ message: "Image of therapist updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar Precios de Terapia -> (Hora)
const updateTherapistPrice = async (req, res) => {
  try {
    const { id } = req.params;
    const { price } = req.body;

    if (!price || !id) return res.status(400).json({ error: "Missing fields" });
    if (price < 0) return res.status(406).json({ error: "Price must be > 0" });

    const therapist = await Therapist.findByPk(id);

    if (!therapist)
      return res.status(404).json({ error: "Therapist not found" });

    await therapist.update({
      price: price,
    });

    res.status(202).json({ message: "Price of therapist updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTherapistPriceByPorcent = async (req, res) => {
  try {
    const { id } = req.params;
    const { porcent } = req.body;

    if (!porcent || !id)
      return res.status(400).json({ error: "Missing fields" });
    if (porcent < 0 || porcent > 100)
      return res
        .status(406)
        .json({ error: "Porcent must be between 0 and 100" });
    const therapist = await Therapist.findByPk(id);

    if (!therapist)
      return res.status(404).json({ error: "Therapist not found" });

    const price = therapist.price;
    const newPrice = price + (price * porcent) / 100;

    await therapist.update({
      price: newPrice.toFixed(2),
    });

    res
      .status(202)
      .json({ message: `Price of therapist updated in ${porcent}%` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTherapist = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "Missing fields" });

    const therapist = await Therapist.findByPk(id);

    if (!therapist)
      return res.status(404).json({ error: "Therapist not found" });

    await therapist.destroy();


    res.status(204).json({ message: "Therapist deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Aditional functions for therapist
const switchTherapistState = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(400).json({ error: "Missing fields" });

    const therapist = await Therapist.findByPk(id);

    if (!therapist)
      return res.status(404).json({ error: "Therapist not found" });

    await therapist.update({
      isActive: !therapist.isActive,
    });

    res.status(202).json({ message: "Therapist state updated"});
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
  deleteTherapist,
  switchTherapistState,
  fillTherapist,
};