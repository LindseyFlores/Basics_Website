"use strict";
const express = require('express');
const app = express();
const uploadRoute = require('./routes/upload.route');

app.use(express.static('public')); // to serve your HTML and CSS files
app.use('/upload', uploadRoute);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// const express = require('express');
// const app = express();

// const multer = require("multer");
// const upload = multer({ dest: 'uploads/' });  // Set up multer to store uploaded files in 'uploads' directory

// // Middlewares for parsing non-file form data
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// const cartRouter = require("./routes/cart.route");
// const uploadRoute = require("./routes/upload.route");

// // Example route to handle homepage or simple GET
// app.get('/', (req, res) => {
//     res.json({message: "hello"});
// });

// // Routes
// app.use("/cart", cartRouter);
// app.use("/upload", uploadRoute);

// // Route for bulk uploading products
// app.post('/upload', upload.single('fileUpload'), (req, res) => {
//     const file = req.file;
//     if (!file) {
//         return res.status(400).send('No file uploaded.');
//     }
//     // Assuming we will add file processing and database insertion here
//     res.send('File uploaded successfully.');
// });

// const PORT = process.env.PORT || 8000;

// app.listen(PORT, () => {
//   console.log("App listening at http://localhost:" + PORT);
// });
