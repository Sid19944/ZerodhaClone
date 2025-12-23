import React from "react";

function RightSection({ title, description, link1, link1Text, image, arrowIcon1 }) {
  return (
    <div className="container my-5 py-2 ">
      <div className="row between v-align flex-wrap flex-row justify-content-around">
        <div className="col-lg-4 col-sm-12 d-flex flex-column justify-content-center">
          <h2>{title}</h2>
          <p>{description}</p>
          <a href={link1}>
            {link1Text}
            {arrowIcon1}
          </a>
        </div>
        {/* <div className="col-lg-2 col-sm-12"></div> */}
        <div className="col-lg-6 col-sm-12">
          <img src={image} alt={title} style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
