import express from 'express';
const app = new express();

app.get('/', (req, res) => {
    res.send('Hello World, this is the root route.')
});

app.listen(3000);
app.get('/uno', (req, res) => {
    res.send('Hello World, this is the uno route.')
});

app.get('/prueba', (req, res) => {
    res.send('Hello World, this is the prueba route.')
});