const server = require("./src/app.js");
const { conn, User, Contact, Therapist, Patient, Category} = require("./src/db.js");
const {fillUser} = require("./src/controllers/user.js")
const {fillContact} = require("./src/controllers/Contact.js")
const {fillPatient} = require("./src/controllers/patient.js")
const {fillTherapist} = require("./src/controllers/therapist.js");
const { fillCategory } = require("./src/controllers/Category.js");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    fillCategory(Category);
    fillUser(User);
    fillContact(Contact);
    fillPatient(Patient);
    
    fillTherapist(Therapist);
    
    console.log("%s listening at 3001"); // eslint-disable-line no-console
    //fillTemperaments(Temperament);
  });
});