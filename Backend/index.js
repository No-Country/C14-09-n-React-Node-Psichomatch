const server = require("./src/app.js");
const { conn, User, Contact, Therapist, Patient} = require("./src/db.js");
const {fillUser} = require("./src/controllers/user.js")
const {fillContact} = require("./src/controllers/Contact.js")
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    fillUser(User);
    fillContact(Contact);
    fillPatient(Patient);
    fillTherapist(Therapist);
    console.log("%s listening at 3001"); // eslint-disable-line no-console
    //fillTemperaments(Temperament);
  });
});