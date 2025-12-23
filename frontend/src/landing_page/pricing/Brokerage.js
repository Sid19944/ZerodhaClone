import React from "react";

function Brokerage() {
  return (
    <div className="container brokerage my-5 py-5 border-bottom">
      <div className="row">
        <div className="col-lg-8 col-md-6 col-sm-12">
          <a href="#">
            <h4>Brokerage calculatior</h4>
          </a>
          <ul>
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of{" "}
              <i class="fa-solid fa-indian-rupee-sign"></i>50 + GST per opder
            </li>
            <li>Digital contract notes will be sent via e-mail</li>
            <li>
              Physical copies of contract notes, if requiired, shall be charges
              apply.
            </li>
            <li>
              For NRI account ( non-PIS ),0.5% or{" "}
              <i class="fa-solid fa-indian-rupee-sign"></i>200 per executed
              order ( Whichever is lower ).
            </li>
            <li>
              For NRI account ( PSI ), 0.5% or{" "}
              <i class="fa-solid fa-indian-rupee-sign"></i>200 per executed
              order for equity ( Whichever is lower )
            </li>
            <li>
              If the account is in debit balancd, any order placed will be
              charged <i class="fa-solid fa-indian-rupee-sign"></i>40 per
              execured order instead of{" "}
              <i class="fa-solid fa-indian-rupee-sign"></i>20 per executed
              order.
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <a href="#">
            <h4>List of charges</h4>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
