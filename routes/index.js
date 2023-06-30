const route = require("express").Router();
const authentication = require("../middleware/authentication");
const AuthControllers = require("../controllers/authControllers");
const TodosControllers = require("../controllers/todoControllers");


route.get("/", (req, res) => {
    res.json({
      page: "home",
    });
  });
    // auth
  route.post("/users/register", AuthControllers.Register);
  route.post("/users/login", AuthControllers.Login);

 // todo
 route.get("/todo/getall",authentication, TodosControllers.getData);
 route.post("/todo/insert",authentication, TodosControllers.insert);


  module.exports = route