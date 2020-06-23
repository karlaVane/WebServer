const http = require('http'); //importar la libreria
http.createServer((req, res) => { //creando el servidor funcion http
    //res.write("hola mundo desde la web!");
    res.writeHead(200, { 'Content-Type': 'applicaction/json' });
    let content = {
            nombre: 'Karla',
            edad: 22,
            url: req.url
        }
        // envia un json al cliente

    res.write(JSON.stringify(content)) //pasa el json a string
    res.end();
}).listen(3000)
console.log("escuchando el puerto 3000");