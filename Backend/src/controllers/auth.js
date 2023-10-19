const { Patient } = require("../db");
const generateRandomPassword = require("../middlewares/password")
const {main} = require("../middlewares/nodeMailer");
const bcrypt = require("bcryptjs");
const  {tokenSign}  = require('../helpers/generateToken')

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

      if(patientExist) res.status(200).redirect("http://localhost:5173/dashboard");
      const password = generateRandomPassword();
      const tokenSession = await tokenSign(patientExist) //Token
      const salt = bcrypt.genSaltSync(10);
      const encryptPassword = bcrypt.hashSync(password, salt);

      await Patient.create({
        name: userName,
        lastName: userLastName,
        email: patientEmail,
        password: encryptPassword,
      });

      main(patientEmail, password);

      res.status(200).redirect("http://localhost:5173/dashboard")
      res.status(200).send(tokenSession)
    }
      
      
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



  module.exports = {
    authGoogle,
  }