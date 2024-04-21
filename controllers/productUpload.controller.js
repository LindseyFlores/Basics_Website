const fs = require('fs').promises; // Use the promise-based version of the fs module
const productsModel = require('../models/products.model');

exports.bulkUpload = async (req, res) => {
    try {
        console.log("Bulk upload request received"); // Log when a request hits the route
        const fileData = await fs.readFile(req.file.path);
        const json = JSON.parse(fileData);
        
        if (json.products && Array.isArray(json.products)) {
            await productsModel.bulkInsertProducts(json.products);
            console.log("Products uploaded successfully"); // Log on success
            res.send('Products uploaded successfully');
        } else {
            console.error("Invalid file format"); // Log for invalid format
            res.status(400).send('Invalid file format');
        }
    } catch (err) {
        console.error("Error processing request:", err); // Log detailed error
        res.status(500).send('Error processing your request');
    } finally {
        // Clean up uploaded file
        try {
            await fs.unlink(req.file.path);
        } catch (unlinkErr) {
            console.error('Error removing the uploaded file:', unlinkErr);
        }
    }
};



// exports.bulkUpload = async (req, res) => {
//     try {
//         const fileData = fs.readFileSync(req.file.path);
//         const json = JSON.parse(fileData);
//         if (json.products && Array.isArray(json.products)) {
//             await productsModel.bulkInsertProducts(json.products);
//             res.send('Products uploaded successfully');
//         } else {
//             res.status(400).send('Invalid file format');
//         }
//     } catch (err) {
//         res.status(500).send('Error processing your request');
//     } finally {
//         fs.unlinkSync(req.file.path); // Clean up uploaded file
//     }
// };
