const server = require("./src/app.js");
const { conn, User, Contact, Therapist } = require("./src/db.js");
const { fillUser } = require("./src/controllers/user.js")
const { fillContact } = require("./src/controllers/Contact.js")
const { fillTherapist } = require("./src/controllers/therapist.js");
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    fillUser(User);
    fillContact(Contact);
    // Fill Therapist -->
    fillTherapist(Therapist);
    console.log("%s listening at 3001"); // eslint-disable-line no-console
    //fillTemperaments(Temperament);
  });
});