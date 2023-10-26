const { Therapist, Category } = require("../db");
const { fillTherapistData } = require("../common/filledDates");
const { Op } = require("sequelize");

// Functions for therapist CRUD
const getTherapists = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = 2;
    const offset = (page - 1) * perPage;
    const limit = perPage;
    const therapists = await Therapist.findAll({
      include: [
        {
          model: Category,
          attributes: ["name"],
  
        },],
      offset,
      limit,
      order: [["id", "ASC"]],
    });

    const actualPage = page || 1;

    const totalCount = await Therapist.count();

    const totalPages = Math.ceil(totalCount / perPage);
    res.status(200).json({ therapists, totalPages, actualPage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const filterTherapistByCategoryId = async (req, res) => {
  try {
    const { id } = req.params;

    if(!id) return res.status(400).json({ error: "Missing fields" });

    const page = parseInt(req.query.page) || 1;
    const perPage = 6;
    const offset = (page - 1) * perPage;
    const limit = perPage;

    const therapists = await Therapist.findAll({
      where:{CategoryId: id},
      include: [
        {
          model: Category,
          attributes: ["name"],
  
        },],
      offset,
      limit,
      order: [["id", "ASC"]],
    });

    if (!therapists)
      return res.status(404).json({ error: "Therapist not found" });


    const therapists2 = await Therapist.findAll({
      where:{CategoryId: id},
    });

    if (!therapists2)
      return res.status(404).json({ error: "Therapist not found" });

    const actualPage = page || 1;

    const totalCount =  therapists2.length;

    const totalPages = Math.ceil(totalCount / perPage);
    res.status(200).json({ therapists, totalPages, actualPage });
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

const getTherapistById = async (req, res) => {
  try {
    const { id } = req.params;
    if(!id) return res.status(400).json({ error: "Missing fields" });

    const therapist = await Therapist.findByPk(id);
    if(!therapist) return res.status(404).json({ error: "Therapist not found" });

    res.status(200).json(therapist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Search functions for therapist

const searchByNameLastName = async (req, res) => {
  try {
    const { name, lastName } = req.params;
    const page = parseInt(req.query.page) || 1;
    const perPage = 6;
    const offset = (page - 1) * perPage;

    if(name === "null" || lastName === "null") return res.status(400).json({ error: "Missing fields" });

    const therapist = await Therapist.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
        lastName: {
          [Op.like]: `%${lastName}%`,
        },
      },
      offset,
      limit: perPage,
    });

    if (!therapist)
      return res.status(404).json({ error: "Therapist not found" });

    const totalTherapist = therapist.length;
    const totalPages = Math.ceil(totalTherapist / perPage);

    res.status(200).json({ therapist, totalPages, totalTherapist });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const searchByPrice = async (req, res) => {
  const { price } = req.params;
  const page = parseInt(req.query.page) || 1;
  const perPage = 2;
  const offset = (page - 1) * perPage;

  if (!price) return res.status(400).json({ error: "Missing fields" });

  if(price < 0) return res.status(406).json({ error: "Price must be > 0" });
  
  try {
    const therapist = await Therapist.findAll({
      where: {
        price: {
          [Op.lte]: price,
        },
      },
      limit: perPage,
      offset,
    });

    if (!therapist)
      return res.status(404).json({ error: "Therapist not found" });

      const totalTherapist = therapist.length;
      const totalPages = Math.ceil(totalTherapist / perPage);
  
      res.status(200).json({ therapist, totalPages, totalTherapist });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const searchByUbication = async (req, res) => {
  const { ubication } = req.params;

  const page = parseInt(req.query.page) || 1;
  const perPage = 2;
  const offset = (page - 1) * perPage;

  if (!ubication) return res.status(400).json({ error: "Missing fields" });

  try {
    const therapist = await Therapist.findAll({
      where: {
        adress: {
          [Op.like]: `%${ubication}%`,
        },
      },
      limit: perPage,
      offset,
    });

    if (!therapist)
      return res.status(404).json({ error: "Therapist not found" });

      const totalTherapist = therapist.length;
      const totalPages = Math.ceil(totalTherapist / perPage);
  
      res.status(200).json({ therapist, totalPages, totalTherapist });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const searchByCountry = async (req, res) => {
  const { country } = req.params;
  console.log(country)

  const page = parseInt(req.query.page) || 1;
  const perPage = 6;
  const offset = (page - 1) * perPage;

  if (!country) return res.status(400).json({ error: "Missing fields" });

  try {
    const therapist = await Therapist.findAll({
      where: {
        nation: {
          [Op.iLike]: `%${country}%`,
        },
      },
      limit: perPage,
      offset,
    });

    if (!therapist)
      return res.status(404).json({ error: "Therapist not found" });

      const totalTherapist = therapist.length;
      const totalPages = Math.ceil(totalTherapist / perPage);
  
      res.status(200).json({ therapist, totalPages, totalTherapist });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

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
  getTherapistById,
  fillTherapist,
  searchByNameLastName,
  searchByPrice,
  searchByUbication,
  filterTherapistByCategoryId,
  searchByCountry,
};