const UserRepository = require('../repository/user.repository')


class UserService{

    // static createUser(name, email, password, age, address , zipCode){
    //     UserRepository.createUser(name, email, password, age, address , zipCode)
    // }

    static createUser(user){
        UserRepository.createUser(user)
    }
}

module.exports = UserService;