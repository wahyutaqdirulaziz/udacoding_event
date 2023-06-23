
const {Todos,User} = require('../models');

class TodoControllers{
    static getAll(req,res){
        const user = res.locals.user;
        res.status(200).json({ message: `Hallo ${user.email}` });
    }

   
}


module.exports = TodoControllers;