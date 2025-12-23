import React from "react";
import {Link} from "react-router-dom"

function Univers() {
  return (
    <div className="container my-5  py-5">
      <div className=" v-align text-center">
        <div>
          <h2>The Zerodha Universe</h2>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="row ">
          <div className="univers_div col-lg-4 col-md-6 col-sm-12 ">
            <img src="media/images/zerodhaFundhouse.png" className="py-2"/>
            <a href="#">
              <p className="text-secondary text-muted ">
                Our asset management venture that is creating simple and
                transparent index funds to help you save for your goals.
              </p>
            </a>
          </div>
          <div className="univers_div col-lg-4 col-md-6 col-sm-12">
            <img src="media/images/sensibullLogo.svg" className="py-2"/>
            <a href="#">
              <p className="text-secondary text-muted">
                Options trading platform that lets you create strategies,
                analyze positions, and examine data points like open interest,
                FII/DII, and more.
              </p>
            </a>
          </div>
          <div className="univers_div col-lg-4 col-md-6 col-sm-12">
            <img src="media/images/tijori.svg" className="py-2"/>
            <a href="#">
              <p className="text-secondary text-muted">
                Investment research platform that offers detailed insights on
                stocks, sectors, supply chains, and more.
              </p>
            </a>
          </div>
          <div className="univers_div col-lg-4 col-md-6 col-sm-12">
            <img src="media/images/streakLogo.png" className="py-2" />
            <a href="#">
              <p className="text-secondary text-muted">
                Systematic trading platform that allows you to create and
                backtest strategies without coding.
              </p>
            </a>
          </div>
          <div className="univers_div col-lg-4 col-md-6 col-sm-12">
            <img src="media/images/smallcaseLogo.png" className="py-2"/>
            <a href="#">
              <p className="text-secondary text-muted">
                Thematic investing platform that helps you invest in diversified
                baskets of stocks on ETFs.
              </p>
            </a>
          </div>
          <div className="univers_div col-lg-4 col-md-6 col-sm-12">
            <img src="media/images/dittoLogo.png" className="py-2"/>
            <a href="#">
              <p className="text-secondary text-muted">
                Personalized advice on life and health insurance. No spam and no
                mis-selling.
              </p>
            </a>
          </div>
        </div>

        <Link
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }} to="/singup"
        >
          SingUp Now
        </Link>
      </div>
    </div>
  );
}

export default Univers;

// d-flex justify-content-around align-item-center flex-wrap flex-row
