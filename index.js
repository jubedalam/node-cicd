const express =  require("express");
const rateLimit = require("express-rate-limit");

const app = express();

// Rate limiter config
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 100 requests per window
  message: {
    error: "Too many requests, please try again later."
  },
  standardHeaders: true, // RateLimit-* headers
  legacyHeaders: false   // Disable X-RateLimit-* headers
});

// Apply to all routes
app.use(limiter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
