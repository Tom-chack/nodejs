//const {MESSAGE} = require('../models/message');
const {parseToken} = require('./controlToken');
const moment = require('moment');
const { USER } = require('../models/user');
moment.locale('en');

class Message {

    async socketUser(token){
        if(token){
            let tokenData = parseToken(token);
            if(tokenData.userid){
                let user = await USER.findById(tokenData.userid).exec();
                return user;
            }
        }
        return;
    }

    buildMessage({text = '', room = 'general', date = Date.now()} = {}, {username = 'Bot'} = {}){
        return {
            text,
            room,
            username,
            date: moment(date).format('HH:mm:ss')
        };
    }

}

module.exports = new Message();