import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [data, setData] = useState([]);
  const [avgStockPrice, setAvgStockPrice] = useState(0);
  const [stockQuantity, setStockQuantity] = useState(0);
  const [stockPrice, setStockPrice] = useState(0);

  const handleSellClick = () => {
    axios.post("https://zerodhaclone-qij1.onrender.com/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice * stockQuantity,
      mode: "SELL",
    });
    GeneralContext.closeSellWindow();
  };

  useEffect((uid) => {
    axios
      .post("https://zerodhaclone-qij1.onrender.com/sellorder", {
        name: uid,
      })
      .then((res) => {
        setData(res.data);
        setAvgStockPrice(res.data.avgStockPrice);
      });
  }, []);

  const handleStockQtyAndPrice = (qty) => {
    setStockQuantity(qty);
    setStockPrice(avgStockPrice * qty);
  };

  const handleCancelClick = () => {
    GeneralContext.closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <h4 style={{ textAlign: "center" }}>{uid}</h4>
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              max={data.totalQty}
              onChange={(e) => handleStockQtyAndPrice(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <span>Total Qty : {data.totalQty}</span>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>
      <div className="buttons">
        <div>
          <Link className="btn bg-danger rounded-3" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
