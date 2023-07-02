
const {Todos,User} = require('../models');

class TodoControllers{
    static getData(req,res){
        const user = res.locals.user;
        console.log(user.id);
        Todos.findAll({
            where: { users_id: user.id },
        })
        .then(result => {
            if (result == "") {
                res.status(200).json({
                    Message: "No Todos found"
                })
            } else {
                res.status(200).json({
                    todo: result
                });
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
    }

    static insert(req,res){
        const user = res.locals.user;
        let input = {
			title: req.body.title,
            description: req.body.description,
            users_id: user.id
		};
        Todos.create(input)
        .then(result => {
            res.status(201).json({
                id: result.id,
                title: result.title,
                description: result.description,
                users_id: result.users_id
            });
        })
        .catch(err => {
            res.status(500).json({
                message: err.errors[0].message
            });
        });
    }

    static updateData(req,res){
        const user = res.locals.user;
         let id = req.params.id;
        let input = {
            title: req.body.title,
            description: req.body.description,
		};
        Todos.update(
            input,
            {
                where: {
                    id: id,
                    users_id: user.id
                },
                returning: true
            }
        )
        .then(result => {
            res.status(200).json({
                Todos: result
            });
        })
        .catch(err => {
            res.status(500).json({
                message: err.errors[0].message
            });
        });
    }

    static delete(req,res){
        const user = res.locals.user;
        let id = req.params.id;
        Todos.destroy({
            where: {
                id: id,
                users_id: user.id
            }
        })
        .then(result => {
            res.status(200).json({ message: "Your Todos has been successfully deleted" });
        })
        .catch(err => {
            res.status(500).json(err);
        });
    }
}


module.exports = TodoControllers;