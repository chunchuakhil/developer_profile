const express = require("express");
const router = express.Router();
const users = require("./api/users");

router.use(function timeLog(req, res, next) {
    console.log("Time:",Date.now());
    next();
});

router.use(express.json());

router.use("/users",users);

module.exports = router;

