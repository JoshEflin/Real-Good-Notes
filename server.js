const express = require('express')
const router = require('./routes')
const fs = require('fs/promises');
const path = require('path');


const PORT= process.env.PORT ||3001;

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(express.static('public'));
app.use('/api', router)

app.get('*', (req, res) => {
console.log('notes')
res.sendFile(path.join(__dirname, '/public/notes.html'));
})


app.listen (PORT, () => {
    console.log(`App listening at http://localhost:${PORT} `)
})