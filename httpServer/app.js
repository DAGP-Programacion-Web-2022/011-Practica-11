// In Line two, dependencies are imported in order to use it in the code.
import { createServer } from 'http';

// In the next function there are some parameters like what will be shown in the http response.
createServer((req, res) => {

    // For example in res.writeHead the 200 next to function, is the response of http server when page is loaded.
    // text-plain indicates that a text format is transmited.
    // res.end indicates the string that will be shown in form of html.
    res.writeHead(200, {'Content-Type': 'text-plain'});
    res.end('Diego Gentner 4H - Practica 08\n');

// listen function indicates url and what port the code will be using.
}).listen(1337, 'localhost');