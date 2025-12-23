import React from "react";

export default function Pricing() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-lg-4 col-sm-12 mb-2">
          <h2>Undertable pricing</h2>
          <p>
            We Poineered the concept of discount broking and price transparency
            India. Flat and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none">
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-lg-6 col-sm-12">
          <div className="row text-center">
            <div className="col border p-3">
              <h1  className="mb-3">
                <i class="fa-solid fa-indian-rupee-sign"></i>0
              </h1>
              <p className="fs-6 text-muted mb-3">Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col border p-3">
              <h1 className="mb-3">
                <i class="fa-solid fa-indian-rupee-sign"></i>20
              </h1>
              <p className="fs-6 text-muted">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
