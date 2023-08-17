const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("Hey, this is the login route");
});

module.exports = router;
