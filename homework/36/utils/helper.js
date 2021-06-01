const bcrypt = require('bcryptjs');


class Utils {

    passGenerator( password ){
        return bcrypt.hashSync(password);
    }

    passValidate( password_1, password_2 ){
        return bcrypt.compareSync(password_1, password_2);
    }

    handleErrors(error, mode = 'send', status = 500, req = {}, res = {}, errno = 0){
        if( mode === 'send' ){
            return res.status(status).json({error});
        } else {
            return {error, errno};
        }
    }

}

module.exports = new Utils();