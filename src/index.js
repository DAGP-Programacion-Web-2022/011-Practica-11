// Express Node Module is imported successfully.
import express from 'express';
// Declaration of app constant and express function is assigned to app const.
const app = new express();

let port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<!DOCTYPE html><head></head><body>Hello World!</body></html>');
});

app.listen(port);

app.get('/api', (req, res) => {
    res.json({ firstname: 'John', lastname: 'Doe'});
});

app.get('/person/:id', (req, res) => {
    res.send(`<!DOCTYPE html><head></head><body><h1>Persona solicitada: ${req.params.id} </h1></body></html>`);
});