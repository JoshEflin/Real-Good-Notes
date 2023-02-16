const fs = require('fs/promises');


// Promise version of fs.readFile

const readFromFile = fs.readFile;

const writeToFile = (destination, content) => {
  fs.writeFile(destination, JSON.stringify(content, null, 4))
  .then((data) => {
    console.info(`\nData written to ${destination}`)
})
  .catch((err) => {
    console.error(err)
  })
}


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