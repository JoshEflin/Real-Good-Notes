const express = require('express')
const router = require('./routes')
const fs = require('fs/promises');
const path = require('path');

const PORT= 3001;

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(express.static('public'));
app.use(router)

app.get('/notes', (req, res) => {

res.sendFile(path.join(__dirname, '/public/notes.html'));
})
app.get('/api/notes', (req, res) => {
    console.log(req.body);
    
    res.sendFile(path.join(__dirname, 'db/db.json'))

})
app.post('/api/notes', (req, res) => {
 console.log(req.body)
})
app.delete('/api/notes/:id', (req, res) => {
    console.log(req)
})

app.listen (PORT, () => {
    console.log(`App listening at http://localhost:${PORT} `)
})