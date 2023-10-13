const { Category } = require("../db");
const { Op } = require("sequelize");

  const fillCategory = async (Patient) => {
    try {
      await Category.bulkCreate([
        {
            name: "Terapia psicoanalítica",
          },
          {
            name: "Terapia cognitivo-conductual",
            
          },
          {
            name: "Terapia sistémica breve",
          },
          {
            name: "Terapia cognitiva",
          },
          {
            name: "Counseling",
          },
          {
            name: "Terapia neuropsicológica",
          },
          {
            name: "Arte y musicoterapia",
          },
      ]);
    } catch (error) {
      console.log(error.message);
    }
  };


  module.exports = {
   fillCategory,
   
  };