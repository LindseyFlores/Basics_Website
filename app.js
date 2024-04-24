"use strict";
const express = require('express');
const app = express();
const uploadRoute = require('./routes/upload.route');
const adminEditRoute = require('./routes/adminEdit.route');

app.use(express.json());
app.use(express.static('public')); // to serve my HTML and CSS files?
//routes
app.use('/upload', uploadRoute); //This is for bulkUpload feature
app.use('/edit', adminEditRoute); //For productEditPage

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
