const express = require('express')
const router = require('./routes')
const fs = require('fs/promises');

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(express.static('public'));

