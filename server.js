// Import Express.js dependency 
const express = require('express');
const uniqid = require('uniqid');


// Initialize express
const app = express();
const PORT = process.env.PORT || 3001;

// Setup data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

//Require routes file
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Setup Listener
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });


