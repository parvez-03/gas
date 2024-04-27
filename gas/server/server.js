const express = require("express");
require("dotenv").config();

const cors = require("cors");
const app = express();

// app.use(cors());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const dbconfig = require("./db");
const gasesRoute = require("./routes/gasesRoute");
const usersRoute = require("./routes/usersRoute");
const bookingRoute = require("./routes/bookingRoute");
const { message } = require("antd");
app.use(express.json());
app.use("/api/gases", gasesRoute);
app.use("/api/gas", gasesRoute);
app.use("/api/users", usersRoute);
app.use("/api/bookings", bookingRoute);
const port = process.env.PORT || 8000;

dbconfig.connect();

app.use(express.json())

app.use("/", (req, res) => {
  return res.json({
    success: true,
    message: "your server is running ................",
  });
});
app.listen(port, () => console.log(`Server running on port ${port}`));
