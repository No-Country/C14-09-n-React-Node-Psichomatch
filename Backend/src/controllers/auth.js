const { Patient } = require("../db");
const generateRandomPassword = require("../middlewares/password")
const main = require("../middlewares/nodeMailer");


const authGoogle = async (req, res) => {
  try {
    
    // Get User Info
    const generalInfo = req.user._json
    const userName = generalInfo.given_name
    const userLastName = generalInfo.family_name
    const patientEmail = generalInfo.email
    const isVerified = generalInfo.email_verified
    const locale = generalInfo.locale
    const photo = generalInfo.picture

    

    if(isVerified){

      //If user is validated, check if exist in DB
      const patientExist = await Patient.findOne({
        where: {
          email: patientEmail
        }
      });

      if(patientExist) res.stauts(200).redirect("https://ar.pinterest.com/pin/32440059807606035/");
      const password = generateRandomPassword();
      await Patient.create({
        name: userName,
        lastName: userLastName,
        email: patientEmail,
        password,
      });

      main(patientEmail, password);

      res.status(200).redirect("https://ar.pinterest.com/pin/1/")
    }
      
      
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



  module.exports = {
    authGoogle,
  }