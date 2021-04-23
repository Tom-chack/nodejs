
const {TODO} = require('../models/todo');


class ToDo {

    constructor(){
        this.list = this.list.bind(this);
        this.add = this.add.bind(this);
    }

    async list(req, res, message){

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

    async add(req, res){
        let message = '';
        try{
            TODO.create({
                task: req.body.task
            });
            message = 'Added Successfully!';
        } 
        catch(e) {
            message = e.message;
        }
        this.list(req, res, message);
    }

    update(req, res){

    }

    remove(req, res){

    }

}

module.exports = new ToDo();