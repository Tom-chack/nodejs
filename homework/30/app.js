const express = require('express');
const random = require('random');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', {title:'Demo Webiste'});
});

app.get('/info', (req, res) => {
    data = {
        name:'Artyom', 
        email:'artyom@example.com',
        title: 'User Info',
        languages:['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Node.js', 'MongoDB']
	}
    res.render('info', {data});
});

app.get('/random', (req, res) => {
    let rand = ( req.query.min && req.query.max ) ? random.int(+req.query.min, +req.query.max) : '';
    let data = {
        rand,
        title: 'Random Numbers'
    }
    res.render('random', {data});
});

app.get('/contact', (req, res) => {
    let data = {
        title: 'Contacts'
    }
    res.render('contact', {data});
});

app.post('/contact', (req, res) => {
    let data = {
        name: req.body.to,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
        title: 'Contacts'
    }
    res.render('contact', {data});
});

app.listen(8007);
