
const {TODO} = require('../models/todo');


class ToDo {

    async list(req, res){

        try{
            let todos = await TODO.find({}).sort('-updatedAt');
            res.render(`todo`, {todos})
        }
        catch(e){
            console.log(err)
            res.json({error:err.message})
        }

    }

    get(req, res){

    }

    add(req, res){

    }

    update(req, res){

    }

    remove(req, res){

    }

}

module.exports = new ToDo();