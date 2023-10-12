
const { Patient } = require("../db");
const { Op } = require("sequelize");

const getpatients = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const perPage = 6;
      const offset = (page - 1) * perPage;
      const limit = perPage;
      const patients = await Patient.findAll({
        offset,
        limit,
        order: [["id", "ASC"]],
      });
  
      const totalCount = await Patient.count();
  
      const totalPages = Math.ceil(totalCount / perPage);
      res.status(200).json({ patients, totalPages });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  const getPatientById = async (req, res) => {
    try {
      const { id } = req.params;
      const patient = await Patient.findByPk(id);
      res.status(200).json(patient);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const deletePatient = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedPatient = await Patient.destroy({
        where: { id },
      });
  
      res.status(200).json(deletedPatient);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const insertPatient = async (req, res) => {
    try {
      const { name, lastName, phone, email, password} = req.body;
        const patient = await Patient.create({ name, lastName, phone, email, password });
        res.status(200).json(patient);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  };
  
  const updatePatient = async (req, res) => {
    const { id } = req.params;
    try {
        const { name, lastName, phone, email, password} = req.body;
        const patient = await Patient.findByPk(id);
        await patient.update({ name, lastName, phone, email, password });
        res.status(200).json(patient); 
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  const fillPatient = async (Patient) => {
    try {
      await Patient.bulkCreate([
        {
            name: "Kevin",
            lastName: "Apellido1",
            phone: "809-689-5888",
            email: "kevin@example.com",
            password: "password123",
          },
          {
            name: "Ludovino",
            lastName: "Apellido2",
            phone: "809-189-5888",
            email: "ludovino@example.com",
            password: "password456",
          },
          {
            name: "Cesar",
            lastName: "Apellido3",
            phone: "809-289-5888",
            email: "cesar@example.com",
            password: "password789",
          },
          {
            name: "Carolina",
            lastName: "Apellido4",
            phone: "809-789-1234",
            email: "carolina@example.com",
            password: "password321",
          },
          {
            name: "Alex",
            lastName: "Apellido5",
            phone: "809-456-7890",
            email: "alex@example.com",
            password: "password654",
          },
          {
            name: "Maria",
            lastName: "Apellido6",
            phone: "809-111-2222",
            email: "maria@example.com",
            password: "password987",
          },
          {
            name: "Pedro",
            lastName: "Apellido7",
            phone: "809-333-4444",
            email: "pedro@example.com",
            password: "password789",
          },
          {
            name: "Laura",
            lastName: "Apellido8",
            phone: "809-555-6666",
            email: "laura@example.com",
            password: "password123",
          },
          {
            name: "Rafael",
            lastName: "Apellido9",
            phone: "809-777-8888",
            email: "rafael@example.com",
            password: "password456",
          },
          {
            name: "Gabriela",
            lastName: "Apellido10",
            phone: "809-999-0000",
            email: "gabriela@example.com",
            password: "password789",
          },
          {
            name: "Santiago",
            lastName: "Apellido11",
            phone: "809-121-2121",
            email: "santiago@example.com",
            password: "password321",
          },
          {
            name: "Ana",
            lastName: "Apellido12",
            phone: "809-343-4343",
            email: "ana@example.com",
            password: "password654",
          },
          {
            name: "Diego",
            lastName: "Apellido13",
            phone: "809-565-6767",
            email: "diego@example.com",
            password: "password987",
          },
          {
            name: "Isabel",
            lastName: "Apellido14",
            phone: "809-787-8989",
            email: "isabel@example.com",
            password: "password789",
          },
          {
            name: "Hector",
            lastName: "Apellido15",
            phone: "809-909-2323",
            email: "hector@example.com",
            password: "password123",
          },
          {
            name: "Valeria",
            lastName: "Apellido16",
            phone: "809-434-2323",
            email: "valeria@example.com",
            password: "password456",
          },
          {
            name: "Antonio",
            lastName: "Apellido17",
            phone: "809-676-9898",
            email: "antonio@example.com",
            password: "password789",
          },
          {
            name: "Marta",
            lastName: "Apellido18",
            phone: "809-898-9898",
            email: "marta@example.com",
            password: "password321",
          },
          {
            name: "Oscar",
            lastName: "Apellido19",
            phone: "809-787-6767",
            email: "oscar@example.com",
            password: "password654",
          },
          {
            name: "Julia",
            lastName: "Apellido20",
            phone: "809-565-4343",
            email: "julia@example.com",
            password: "password987",
          },
      ]);
    } catch (error) {
      console.log(error.message);
    }
  };


  module.exports = {
   getpatients,
   fillPatient,
   updatePatient,
   deletePatient,
   insertPatient,
   getPatientById
  };