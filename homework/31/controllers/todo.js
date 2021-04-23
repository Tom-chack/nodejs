
const {TODO} = require('../models/todo');


class ToDo {

    async list(){

        try{
            let todos = await TODO.find({}).sort('-updatedAt');
            res.render(`todo`, {todos})
        }
        catch(e){
            console.log(err)
            res.json({error:err.message})
        }

    }

    get(){

    }

    add(){

    }

    update(){

    }

    remove(){

    }

}

module.exports = new ToDo();