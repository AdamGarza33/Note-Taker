const path = require('path');

// HTML Routing
module.exports = (app) => {
    // app.get returnes notes.html 
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
      });
    
      // app.get returns index.html file.
      app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
      });
};