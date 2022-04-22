const express = require("express");
const router = express.Router();
const developers = require("./api/developers");

router.use(function timeLog(req, res, next) {
    console.log("Time:",Date.now());
    next();
});

router.use(express.json());

router.use("/developers",developers);

module.exports = router;

