const router = require('express').Router()
const path = require('path');
router.get('/notes', (req, res) => {
    console.log(req.body);
    
    res.sendFile(path.join(__dirname, '../db/db.json'))

})
router.post('/notes', (req, res) => {
 console.log(req.body)
})
router.delete('/notes/:id', (req, res) => {
    console.log(req)
})
module.exports = router
