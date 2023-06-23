const route = require("express").Router();
const AuthControllers = require("../controllers/authControllers");


route.get("/", (req, res) => {
    res.json({
      page: "home",
    });
  });
  route.post("/users/register", AuthControllers.Register);
  route.post("/users/login", AuthControllers.Login);
  module.exports = route