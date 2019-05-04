const bodyParser = require("body-parser");
const express = require("express");

const router = express.Router();

router.use(bodyParser.json());

const thoughts = [
  { _id: 123, message: "I love pepperoni pizza!", author: "unknown" },
  { _id: 456, message: "I'm watching Netflix.", author: "unknown" }
];

router.get("/api/thoughts", (req, res) => {
  const orderedThoughts = thoughts.sort((t1, t2) => t2._id - t1._id);
  res.send(orderedThoughts);
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.send(401);
}

router.post("/api/thoughts", ensureAuthenticated, (req, res) => {
  const { message } = req.body;
  const newThougth = {
    _id: new Date().getTime(),
    message,
    author: req.user.displayName
  };
  thoughts.push(newThougth);
  res.send({ message: "Thanks!" });
});

module.exports = router;
