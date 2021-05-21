var express = require("express");
var router = express.Router();

const users = {
  users: [
    {
      name: "Sean",
      occupation: "Software Engineer",
      hobbies: ["lifting", "reading", "programming"],
    },
    {
      name: "Zach",
      occupation: "Electrician",
      hobbies: ["Math", "Football"],
    },
  ],
};

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(users);
});

module.exports = router;
