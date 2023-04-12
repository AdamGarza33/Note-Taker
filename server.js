// Import Express.js dependency 
const express = require('express');
// 

// Initialize express
const app = express();
const PORT = process.env.PORT || 3001;

// Setup data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

//Require routes file
require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

// Setup Listener
app.listen(PORT, () => {
    console.log(`App listening at localhost${PORT}`);
  });


