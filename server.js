const express = require('express')
const router = require('./routes')
const fs = require('fs/promises');

const PORT= 3001;

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(express.static('public'));

app.listen (PORT, () => {
    console.log("App listening at http://localhost:${PORT} 🚀")
})