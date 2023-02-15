const router = require('express').Router()
const { writeFile } = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend,writeToFile } = require('../helpers/fsUtils');
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
    const noteID = req.params.id  
    readFromFile('./db/db.json').then((data) => JSON.parse(data))
    .then((json) => {
        const result = json.filter((data) => data.id !== noteID);
        writeToFile('./db/db.json', result);
        res.json(result)
    })
    console.log('del')
})
module.exports = router
