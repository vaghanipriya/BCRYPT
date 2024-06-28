const express = require("express");

const bcryptRoute = require("./bcrypt_routes");

const router = express();

router.use("/pass", bcryptRoute);

module.exports = router;
