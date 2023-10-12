const { Patient } = require("../db");

const authGoogle = async (req, res) => {
  try {
    
    // Get User Info
    const generalInfo = req.user._json
    const userName = generalInfo.given_name
    const userLastName = generalInfo.family_name
    const userEmail = generalInfo.email
    const isVerified = generalInfo.email_verified
    const locale = generalInfo.locale
    const photo = generalInfo.picture

    

    if(isVerified){

      //If user is validated, check if exist in DB
      const patientExist = await Patient.findOne({
        where: {
          email: userEmail
        }
      });

      if(patientExist) res.redirect("https://ar.pinterest.com/pin/32440059807606035/")

      
      await Patient.create({
        name: userName,
        lastName: userLastName,
        email: userEmail,
        password: faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/ }),
      });

      res.redirect("https://ar.pinterest.com/pin/1/")
    }
      
      
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



  module.exports = {
    authGoogle,
  }