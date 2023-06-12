
class UtilService{

    static isEmpty(value){
        if(!value)
            return true;
        return false;        
    }

    static isTitleOrDescriptionIsEmpty(title , description) {
        if (!title || !description) {
          return true
        }
        return false;
    }
}

module.exports = UtilService;