const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
const https = require("https");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables
const app = express();
const customerRoute = require("./route/customerRoute.js");

// Set port to a default value if not specified
const port = process.env.PORT || 5000;

// Import routes and models
//const customers = require('./models/customerSchema');
//const customerRoute = require('./route/customerRoute');
const router = require("./route/customerRoute");

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies
app.use('/api/customer', customerRoute);

// MongoDB connection
mongoose
  .connect(process.env.Database, {
  })
  .then(() => {
    console.log("Database MongoDB connection established");
  })
  .catch((err) => {
    console.error("Database MongoDB connection error:", err);
  });

// Start HTTP server
// app.listen(5000);

app.listen(port, () => {
  console.log(`Server app listening on http://localhost:${port}`);
});

// Optional: Start HTTPS server if SSL certificates are available
/*
const options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.cert"),
};

https.createServer(options, app).listen(port, () => {
  console.log(`Server app listening on https://localhost:${port}`);
});
*/
