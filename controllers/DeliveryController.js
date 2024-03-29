// controllers/deliveryController.js
const pool = require ('../sequelize');

const calculatePrice = async (req, res) => {
    try {
      const { organization_id, item_id, zone, total_distance, item_type } = req.body;
  
      // Retrieve pricing information from the database
      const query = `
        SELECT base_distance_in_km, km_price, fix_price
        FROM Pricing
        WHERE organization_id = $1
        AND item_id = $2
        AND zone = $3
      `;
      const { rows } = await pool.query(query, [organization_id, item_id, zone]);
  
      if (rows.length === 0) {
        return res.status(404).json({ error: 'Pricing information not found' });
      }
  
      const { base_distance_in_km, km_price, fix_price } = rows[0];
  
      // Calculate total price
      let totalPrice;
      if (total_distance <= base_distance_in_km) {
        totalPrice = fix_price;
      } else {
        const additionalDistance = total_distance - base_distance_in_km;
        totalPrice = fix_price + (additionalDistance * km_price);
      }
  
      res.json({ total_price: totalPrice });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = { calculatePrice };
  