const express = require('express') //libreria de express
const app = express() //Crear objeto
const hbs = require('hbs')
require('./hbs/helpers')

const puerto = process.env.PORT || 3000; // puerto para Heroku

app.use(express.static(__dirname + '/public')); // buscar en la carpeta puvblic
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs'); // hbs

app.get('/', (req, res) => { // petición get
    res.render('home', { //no es necesario poner .hbs
        nombre: 'KaRla VANEssA',
        pagina: 'Home',
        class1: 'nav-item active',
        class2: 'nav-item'
    })
});


app.get('/about', (req, res) => { // petición get
    res.render('about', { // it's not necessary .hbs
        pagina: 'About',
        class1: 'nav-item',
        class2: 'nav-item active'
    });

});

app.listen(puerto, () => {
    console.log(`Escuchando en el puerto ${puerto}`);
})