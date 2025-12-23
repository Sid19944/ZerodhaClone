import React, { useState, useContext } from "react";
import { Tooltip, Grow } from "@mui/material"; // Tooltip and grow use for hover and hover effect
import { watchlist } from "../data/data";
import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnoutChart";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Label,
  MoreHoriz,
} from "@mui/icons-material";

const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',                 
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, idx) => {
          return <WatchListItem key={idx} stock={stock} />;
        })}
      </ul>
      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock, idx }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = () => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = () => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <spna className="percent">{stock.percent}</spna>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <spna className="price">{stock.price}</spna>
        </div>
      </div>
      {showWatchlistActions && (
        <WatchListActions uid={stock.name} price={stock.price} />
      )}
    </li>
  );
};

const WatchListActions = ({ uid, price }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    console.log(uid);
    generalContext.openBuyWindow(uid, price);
  };

  const handleSellClick = () => {
    console.log(uid);
    generalContext.openSellWindow(uid, price);
  };

  return (
    <span className="actions">
      <Tooltip
        title="Buy (b)"
        placement="top"
        arrow
        TransitionComponent={Grow}
        onClick={handleBuyClick}
      >
        <button className="buy">Buy</button>
      </Tooltip>
      <Tooltip
        title="Sell (s)"
        placement="top"
        arrow
        TransitionComponent={Grow}
        onClick={handleSellClick}
      >
        <button className="sell">Sell</button>
      </Tooltip>
      <Tooltip
        title="Analytics (A)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button>
          <BarChartOutlined className="icon"></BarChartOutlined>
        </button>
      </Tooltip>
      <Tooltip title="more" placement="top" arrow TransitionComponent={Grow}>
        <button>
          <MoreHoriz className="icon"></MoreHoriz>
        </button>
      </Tooltip>
    </span>
  );
};
