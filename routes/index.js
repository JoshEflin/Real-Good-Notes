const router = require('express').Router()
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
router.get('/notes', (req, res) => {
    console.log(req.body);
    console.log('get')
    
    res.sendFile(path.join(__dirname, '../db/db.json'))

})
router.post('/notes', (req, res) => {
 const {title, text} =req.body
 const noteObj = {
    title,
    text,
    id:uuidv4()
 }
 readAndAppend(noteObj, "./db/db.json" );
 const response = {
    status:'yay',
    body : noteObj 
 }
res.json(response);
 console.log('post')
})
router.delete('/notes/:id', (req, res) => {
    console.log(req)
    console.log('del')
})
module.exports = router
