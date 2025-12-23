import React from "react";
import { Link } from "react-router-dom";

export default function Awards() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12 p-5">
          <img src="media/images/largestBroker.svg" style={{width: "100%"}}></img>
        </div>
        <div className="col-lg-6 col-sm-12 p-5 mb-5">
          <h1>Largest Stock broker in India</h1>
          <p className="mb-5">
            2+ millon Zerodha clients contrubute to over 15% of all retail order
            volumes in India daily by trading and investing in:
          </p>
          <div className="row mt-5">
            <div className="col-6">
              <ul>
                <li>Future and Option</li>
                <li>Future and Option</li>
                <li>Future and Option</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Future and Option</li>
                <li>Future and Option</li>
                <li>Future and Option</li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" style={{width : "90%"}}></img>
        </div>
      </div>
    </div>
  );
}
