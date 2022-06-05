const PORT = process.env.PORT || 3001;
const fs = require('fs');
const express = require('express');
const app = express();

app.get('./notes', (req, res) => {
    console.log(`Get notes!`);
});

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });