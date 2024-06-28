const express = require("express");
const { bcrypt_controller } = require("../../controller");

const router = express.Router();

router.post(
    "/hash-pass",
    // controller
    bcrypt_controller.create_bcrypt
);

router.post(
    "/pass-compare/:password",
    // controller
    bcrypt_controller.hash_check
);

module.exports = router;
