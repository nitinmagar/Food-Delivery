// routes/organizationRoutes.js

const express = require('express');
const organizationController = require('../controllers/OrganizationController');

const router = express.Router();

router.get('/organizations', organizationController.getAllOrganizations);

module.exports = router;
