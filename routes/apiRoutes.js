const path = require('path');
const fs = require('fs')
var uniqid = require('uniqid');

// API ROUTE
// Setup the /api/notes get route
module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'));
      });

      app.post('/api/notes', (req, res) => {
        const db = fs.readFileSync('db/db.json');
        db = JSON.parse(db);
        res.json(db);
        // creating body for note
        const userInputNote = {
          title: req.body.title,
          text: req.body.text,
          // creating unique id for each note
          id: uniqid(),
        };
        // pushing created note to be written in the db.json file
        db.push(userInputNote);
        fs.writeFileSync('db/db.json', JSON.stringify(db));
        res.json(db);
    
      });

       // DELETE 
       // Deletes note w/ specified id
 
};

