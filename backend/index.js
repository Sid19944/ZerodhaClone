require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingModel } = require("./model/HoldingModel.js");
const { PositionModel } = require("./model/PositionModel.js");
const { OrderModel } = require("./model/OrderModel.js");

const authRoute = require("./routes/AuthRoute.js");
const orderRoute = require("./routes/Order.js");
const holdingRoute = require("./routes/Holding.js");
const positionRoute = require("./routes/Position.js");

const { UserVerification } = require("./middleware/AuthMiddleware.js");

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGO_URL;

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: ["https://zerodhaclone-1-nwt7.onrender.com", "https://zerodhaclone-dashboard-8i8o.onrender.com"],
    credentials: true,
  })
);
app.use(express.json());

app.use(bodyParser.json());

mongoose
  .connect(URL)
  .then(() => {
    console.log("Connected to the database successfully");
  })
  .catch((err) => {
    console.log("Error occurred while connecting with the database", err);
  });

app.use("/", authRoute);

app.use("/allholdings", holdingRoute);

app.use("/allpositions", positionRoute);

app.use("/allorders", orderRoute);

app.post("/sellorder", async (req, res) => {
  let order = await HoldingModel.find({ name: req.body.name });

  const totalQty = order.reduce((tQty, el) => {
    return tQty + el.qty;
  }, 0);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price;
  }, 0);
  // console.log(order);
  const avgStockPrice = totalPrice / totalQty;

  res.json({ totalPrice, totalQty, avgStockPrice });
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.json();
});

app.post("/newholding", async (req, res) => {
  let newHolding = new HoldingModel({
    name: req.body.name,
    qty: req.body.qty,
    avg: req.body.avg,
    price: req.body.price,
    net: req.body.net,
    day: req.body.day,
  });
  newHolding.save();
  res.json();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
