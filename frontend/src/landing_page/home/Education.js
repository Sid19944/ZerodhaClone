import React from "react";

export default function Education() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12 mb-3">
          <img src="media/images/education.svg" style={{width:"95%"}}></img>
        </div>
        <div className="col-lg-6 col-sm-12 mb-3">
          <h3>Free and open market education</h3>
          <div className="mb-5">
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="#">
              Versity <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mb-5">
            <p>
              TacdingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="#">
              TradingQ&A <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
