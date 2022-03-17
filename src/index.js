// Express Node Module is imported successfully.
import express from 'express';
// Declaration of app constant and express function is assigned to app const.
const app = new express();

// This variable assigns the port that express will be using.
let port = process.env.PORT || 3000;

// Sending information to the server and route assignation (HTML).
app.get('/', (req, res) => {
    res.send('<!DOCTYPE html><head></head><body>Hello World!</body></html>');
});

// This function assigns the port that express will be using, port parameter was assigned in port variable.
app.listen(port);

// Sending information to the server and route assignation (JSON).
app.get('/api', (req, res) => {
    res.json({ firstname: 'John', lastname: 'Doe'});
});

// Sending information to the server and route assignation (HTML with REQUEST INFO (HTTP ROUTE)).
app.get('/person/:id', (req, res) => {
    res.send(`<!DOCTYPE html><head></head><body><h1>Persona solicitada: ${req.params.id} </h1></body></html>`);
});