const fs = require('fs/promises');

// read the file
const readFromFile = fs.readFile;

// writes the data from the front end into the db.json file
const writeToFile = (destination, content) => {
  fs.writeFile(destination, JSON.stringify(content, null, 4))
  .then((data) => {
    console.info(`\nData written to ${destination}`)
})
  .catch((err) => {
    console.error(err)
  })
}
// reads in the db.json file and adds the new data, then sends back the old data with new data appended.
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8')
   .then((data)=> {
   const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData); 
    console.log(data)
   })
    .catch((err) =>{
      console.error(err);  
  })
}

module.exports = { readFromFile, writeToFile, readAndAppend };