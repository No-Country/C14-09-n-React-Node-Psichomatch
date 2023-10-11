const { Router } = require("express");

const userRoutes = require("./user");
const contactRoutes = require("./contact")
const authRoutes = require("./auth");
const passport = require("passport");
const router = Router();

router.use("/", userRoutes);
router.use("/",contactRoutes);
router.use("/auth",passport.authenticate("auth-google",{
    scope:[
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
    ],
    session: false,
}), authRoutes);

module.exports = router;