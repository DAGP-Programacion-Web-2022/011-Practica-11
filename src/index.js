// Express Node Module is imported successfully.
import express from 'express';
// Declaration of app constant and express function is assigned to app const.
const app = new express();

let port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<!DOCTYPE html><head></head><body>Hello World!</body></html>');
});

app.listen(port);




// // Sending information to the server and route assignation.

// // Listen() function assigns the local host port that is being used by express.
// app.listen(3000);

// // Sending information to the server and route assignation.
// app.get('/uno', (req, res) => {
//     res.send('Hello World, this is the uno route.')
// });

// // Sending information to the server and route assignation.
// app.get('/prueba', (req, res) => {
//     res.send('Hello World, this is the prueba route.')
// });