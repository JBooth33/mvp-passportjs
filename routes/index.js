const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/apiRoutes");
const authRoutes = require("./auth");
const htmlRoutes = require("./api/htmlRoutes");

// API Routes
router.use("/api", apiRoutes);
router.use("/auth", authRoutes);
router.use("/", htmlRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
