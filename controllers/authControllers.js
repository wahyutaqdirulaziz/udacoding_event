
const { comparePassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");
const { User } = require("../models");

class AuthControllers{
    static Register(req,res){
        let input = {
            email:req.body.email,
            password:req.body.password,
            firstName:req.body.firstName,
            lastName:req.body.lastName
        };

        User.create(input).then(value =>{
            res.status(201).json({
                message : "User created successfully"
            })
        }).catch(err =>{
            res.status(500).json({

                message: err.message
            });
        });

    }


    static Login(req, res) {
        let password = req.body.password;
        let email = req.body.email;
        User.findOne({ email: email}).then(data=>{
            if(!data){
                res.status(401).json({ message: "Invalid Credentials" });
            }else{
                // let compare = 
                let compare = comparePassword(password,data.password);
                if(compare){
                    let payload = {
                        id : data.id,
                        email : data.email,
                        lastName : data.lastName,
                        firstName :data.firstName
                    }
                    const token = generateToken(payload);
                    res.status(200).json({
                        token: token
                    });
                }else{
                    res.status(401).json({ message: "Invalid Credentials" });
                }
            }
        }).catch(err => {
            res.status(401).json(err);
        });
    }
}

module.exports = AuthControllers;