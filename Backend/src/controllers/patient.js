
const { Contact } = require("../db");
const { Op } = require("sequelize");

const getpatients = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const perPage = 6;
      const offset = (page - 1) * perPage;
      const limit = perPage;
      const contacts = await Contact.findAll({
        offset,
        limit,
        order: [["id", "ASC"]],
      });
  
      const totalCount = await Contact.count();
  
      const totalPages = Math.ceil(totalCount / perPage);
      res.status(200).json({ contacts, totalPages });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };