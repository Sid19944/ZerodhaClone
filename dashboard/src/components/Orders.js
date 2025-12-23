import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/allorders").then((res) => {
      setAllOrders(res.data);
    }, []);
  });

  return (
    <div className="orders">
      {allOrders.length > 0 ? (
        <div className="order-table">
          <table>
            <tr>
              <th>Name</th>
              <th>Qty.</th>
              <th>Buy Price</th>
              <th>Total Price</th>
              <th>Mode</th>
            </tr>

            {allOrders.map((stock, idx) => {
              const isProfit = stock.mode === "BUY" ? "profit" : "loss";
              const t_price = stock.qty * stock.price;
              return (
                <tr key={idx}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price/stock.qty}</td>
                  <td>{t_price}</td>
                  <td className={isProfit}>{stock.mode}</td>
                </tr>
              );
            })}
          </table>
        </div>
      ) : (
        <p>You haven't placed any orders today</p>
      )}

      <Link to={"/"} className="btn">
        Get started
      </Link>
    </div>
  );
};

export default Orders;
