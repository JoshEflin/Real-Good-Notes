const express = require('express')
const router = require('./routes')
const fs = require('fs/promises');
const path = require('path');


const PORT= process.env.PORT ||3001;
// boilerplate code
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(express.static('public'));
// allows the server to find routes by talking to the index.js file in the routes folder
app.use('/api', router)

// if there is a typo in the URL after the /, get * ignores it and treats it as the root
app.get('*', (req, res) => {
console.log('notes')
res.sendFile(path.join(__dirname, '/public/notes.html'));
})


// listen on PORT, either  the deployment servers ENV or 3001 if local
app.listen (PORT, () => {
    console.log(`App listening at http://localhost:${PORT} `)
})