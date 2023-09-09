const router = require("express").Router();
const { controllers: authController } = require("../api/v1/auth");

// Auth Routes
router.post("/api/v1/auth/register", authController.register); 

module.exports = router;
