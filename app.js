// const express = require('express');
// const OrganizationRoute = require('./routes/OrganizationRoute');
// const DeliveryRoutes = require ('./routes/DeliveryRoutes')

// const app = express();

// app.use(express.json());

// // Use organization routes
// app.use('/api', OrganizationRoute);
// app.use('/api', DeliveryRoutes);


// const PORT = process.env.PORT || 3500;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Define routes
const deliveryRoutes = require('./routes/DeliveryRoutes');
app.use('/api/delivery', deliveryRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export the app instance for testing purposes
