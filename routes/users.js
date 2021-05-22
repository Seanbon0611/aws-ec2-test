const tracer = require("dd-trace").init({
  analytics: true,
  tags: { cusomter_id: "" },
});
var express = require("express");
var router = express.Router();

const users = [
  {
    id: 1,
    name: "Sean",
    occupation: "Software Engineer",
    hobbies: ["lifting", "reading", "programming"],
  },
  {
    id: 2,
    name: "Zach",
    occupation: "Electrician",
    hobbies: ["Math", "Football"],
  },
];

/* GET users listing. */
router.get("/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  const span = tracer.scope().active();
  span.setTag("customer_id", req.params.id);
  res.send(user);
});

module.exports = router;
