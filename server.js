const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

// Storage and retrieval of notes
const allNotes = require('./db/db.json');

// Read the db.json file and return all saved notes
app.get('/api/notes', (req, res) => {
    res.json(allNotes.slice(1));
});

// To join paths
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// TO DO 
// POST /api/notes should receive a new note to save 
//on the request body, add it to the db.json file, 
//and then return the new note to the client. 
//You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });