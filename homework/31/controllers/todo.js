
const {TODO} = require('../models/todo');


class ToDo {

    constructor(){
        this.add1 = this.add1.bind(this);
    }

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

    async add1(req, res){
        try{
            await TODO.create({task: req.body.task});
        } 
        catch(e) {
            console.log(e);
        }
        this.list(req, res); //Version 1 - regular form submission
    }

    async add2(req, res){
        try{
            console.log(req.body);
            let newTask = await TODO.create({task: req.body.task});
            let taskObj = {
                id: newTask._id,
                task: newTask.task
            } 
            res.json({todo: taskObj});
        } 
        catch(e) {
            let message = e.message;
            res.json({error: message});
        }
    }

    update(req, res){

    }

    remove(req, res){

    }

}

module.exports = new ToDo();