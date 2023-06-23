
const {Todos,User} = require('../models');

class TodoControllers{
    static getAll(req,res){
        const user = res.locals.user;
        Todos.findAll({
            where: { userid: user.id },
        }).then(data =>{

        }).catch(err=>{
            
        });
    }

    static getById(req,res){

    }


    static updateByid(req,res){


    }


    static delete(req,res){

    }
}


module.exports = TodoControllers;