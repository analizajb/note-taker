const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const fs = require('fs');


app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });