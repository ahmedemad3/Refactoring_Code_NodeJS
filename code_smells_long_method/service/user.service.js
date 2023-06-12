const UserRepository = require('../repository/user.repository')

class UserService{

   static async checkExistingUser(){
            return UserRepository.checkExistingUser();
    }

    static async getUsers(){
        return UserRepository.getUsers();
}

}

module.exports = UserService