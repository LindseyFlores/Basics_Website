const express = require('express');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use('/api', productRoutes);
app.use('/api', cartRoutes);


app.listen(PORT, () => console.log(`Server running on http://localhost:3000`));


// const express = require('express');
// const app = express();

// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });

// app.get('/', (req, res) => {
//   res.send('are we cooking?');
// });