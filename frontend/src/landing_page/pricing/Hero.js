import React from "react";

function Hero() {
  return (
    <div className="container border-bottom my-5">
      <div className="row text-center">
        <div className="py-5 my-5">
          <h2>Charges</h2>
          <p className="fs-4 text-secondary">List of all charges and taxes</p>
        </div>
        <div className="row d-flex justify-content-around p-5">
          <div className="col-lg-3 col-md-5 col-sm-11">
            <img src="media/images/pricing0.svg" style={{ width: "70%" }} />
            <div>
              <h5>Free equity delivery</h5>
              <p>
                All equity delivery investments (NSE, BSE), are absolutely free
                — ₹ 0 brokerage.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-11">
            <img
              src="media/images/intradayTrades.svg"
              style={{ width: "70%" }}
            />
            <div>
              <h5>Intraday and F&O trades</h5>
              <p>
                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                intraday trades across equity, currency, and commodity trades.
                Flat ₹20 on all option trades.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-11">
            <img src="media/images/pricing0.svg" style={{ width: "70%" }} />
            <div>
              <h5>Free direct MF</h5>
              <p>
                All direct mutual fund investments are absolutely free — ₹ 0
                commissions & DP charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
