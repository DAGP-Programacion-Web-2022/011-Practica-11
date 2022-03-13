import { createServer } from 'http';

createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text-plain'});
    res.end('Diego Gentner 4H - Practica 08\n');

}).listen(1337, 'localhost');