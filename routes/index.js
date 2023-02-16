const router = require('express').Router();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend,writeToFile } = require('../helpers/fsUtils');

// loads the page and sends the json to the front end to be rendered 
router.get('/notes', (req, res) => {    
    res.sendFile(path.join(__dirname, '../db/db.json'));
})
// converts the user input into an object to be stringified and sent to server to store. 
// assigns a unique ID to the stored note which is then stored as a data attribute on the front end
router.post('/notes', (req, res) => {
 const {title, text} =req.body
 const noteObj = {
    title,
    text,
    id:uuidv4()
 };
 readAndAppend(noteObj, "./db/db.json" );
 const response = {
    status:'success',
    body : noteObj 
 };
res.json(response);
})
// allows user to delete notes by clicking the red trash can,
// grabs the ID of the note and removes it from the JSON file.
router.delete('/notes/:id', (req, res) => {
    const noteID = req.params.id;
    readFromFile('./db/db.json').then((data) => JSON.parse(data))
    .then((json) => {
        const result = json.filter((data) => data.id !== noteID);
        writeToFile('./db/db.json', result);
        res.json(result);
    })
})
module.exports = router;
