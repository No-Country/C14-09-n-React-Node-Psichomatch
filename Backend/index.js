const server = require("./src/app.js");
const { conn, User, Contact, Therapist, Patient, Category, Rating, Hour, Availability, Country} = require("./src/db.js");
const {fillUser} = require("./src/controllers/user.js")
const {fillContact} = require("./src/controllers/Contact.js")
const {fillPatient} = require("./src/controllers/patient.js")
const {fillTherapist} = require("./src/controllers/therapist.js");
const { fillCategory } = require("./src/controllers/Category.js");
const {fillRating} = require("./src/controllers/rating.js")
const {fillHour} = require("./src/controllers/hour.js")
const {fillAvailability} = require("./src/controllers/availability.js");
const { fillCountry } = require("./src/controllers/country.js");
// Syncing all the models at once.


const fillDataSequentially = async () => {
  try {
    await fillCategory(Category);
    await fillCountry(Country);
    await fillPatient(Patient);
    
    await fillHour(Hour);
    await fillTherapist(Therapist);
    await fillAvailability(Availability);
    await fillRating(Rating);

    
  } catch (error) {
    console.error("Error:", error);
  }
};
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    fillDataSequentially();

    
    console.log("%s listening at 3001"); // eslint-disable-line no-console
    //fillTemperaments(Temperament);
  });
});