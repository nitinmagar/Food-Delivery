use this url to request an api- http://localhost:3000/api/delivery/calculate-price
use post method to check an api.


use below object in body of the postman to fetch response 
{
  "organization_id": 3,
  "item_id": 3,
  "zone": "south",
  "total_distance": 50,
  "item_type": "Non-Perishable"
},


it will show response message as total price based on distance.
