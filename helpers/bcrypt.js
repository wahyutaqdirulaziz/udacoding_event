const bcrypt = require('bcrypt');

function comparePassword(usersPassword,hashPassword) {

    const compare = bcrypt.compareSync(usersPassword,hashPassword);
    return compare;
}


function hashPassword(usersPassword){
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(usersPassword, salt);
    return hash;
}


module.exports = {
    hashPassword,
    comparePassword
}