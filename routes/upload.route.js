const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const productUploadController = require('../controllers/productUpload.controller');

router.post('/bulk', upload.single('fileUpload'), productUploadController.bulkUpload);

module.exports = router;
//this is my upload.route.js file