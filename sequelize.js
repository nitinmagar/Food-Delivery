// // sequelize.js

// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('FoodDelivery', 'postgres', 'root', {
//   host: 'localhost',
//   dialect: 'postgres',
// });

// module.exports = sequelize;


const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://postgres:root@localhost:5432/FoodDelivery',
});

module.exports = pool;
