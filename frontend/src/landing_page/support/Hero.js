import React from "react";

function Hero() {
  return (
    <div className="container-fluid border-bottom p-4 bg-primary text-white support-hero">
      <div className="row px-5">
        <div className="col-lg-6 col-sm-12 px-2">
          <p className="fw-semibold mb-5">Support Portal</p>
          <p className="fw-semibold">
            Search for an answer or browse help topics to create a ticket
          </p>
          <input placeholder="Eg: how do i activate F&O, why is my order getting rejected." style={{width:"100%", height: "20%", padding :"5%"}}/><br/>
          <a href="#">Track account opening</a>  &nbsp;&nbsp;
          <a href="#">Track sefment activation</a> &nbsp;&nbsp;
          <a href="#">Intraday mergins</a> &nbsp;&nbsp;
          <a href="#">Kite user manual</a> &nbsp;&nbsp;
          
        </div>
        <div className="col-lg-6 col-sm-12 px-2">
          <p className="fw-semibold mb-5">Track Ticket</p>
          <p className="fw-semibold">Featured</p>
          <ol>
            <li>
              <a href="3" className="text-white">
                Current Takeovers and Delisting - January 2024
              </a>{" "}
            </li>
            <li>
              <a href="#" className="text-white">
                Latest Intraday leverages - MIS & CO
              </a>{" "}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
