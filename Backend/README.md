# Back Docs

`Develope url: https://localhost:3000/...`

## Open Endpoints

Open endpoints require no Authentication.

- [Login] : `Login With _Empty_`

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view above.

### Patient related

Each endpoint manipulates or displays information related to the User whose
Token is provided with the request:

- [Patient Register](./readme/userRoute/registerPatient.md) : `POST /userRoute/registerPatient/`
- [All Patients](./readme/patientRoute/getAllPatients.md) : `GET /patientRoute/getAllPatients`

### Medics related

Endpoints for viewing and manipulating the Projects that the Admin
has permissions to access

- [Create Medics](./readme/medicsRoute/createMedic.md) : `POST medicsRoute/create`
- [Get All medics](./readme/medicsRoute/getAllMedics.md) : `GET /medicsRoute/getAllMedics`

### Imagen Containers related

Endpoints for viewing and manipulating the Projects that the Admin
has permissions to access

### Payment Methods

-

### DashBoard Admin

-

### Developer Tools

- npm run dev

### Build Tsc

- npm run tsc
