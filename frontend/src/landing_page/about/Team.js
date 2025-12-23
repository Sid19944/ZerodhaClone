import React from "react";

export default function Team() {
  return (
    <div className="container">
      <div>
        <h2 className="text-center">People</h2>
      </div>
      <div className="row p-5 mt-2 text-muted">
        <div className="col-lg-6 col-sm-12 text-center mb-3">
          <img src="media/images/nithinKamath.jpg" className=" rounded-circle"  style={{width: "45%"}}></img>
          <h4 className="mt-3">Nithin Kamath</h4>
          <p className="text-muted">Founder & CEO</p>
        </div>
        <div className="col-lg-6 col-sm-12 mb-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <a href="/">Homepage / TradingQnA / Twitter</a></p>
        </div>
      </div>
    </div>
  );
}
