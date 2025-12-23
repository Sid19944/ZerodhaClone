import React from "react";

function LeftSection({
  image,
  title,
  description,
  link1,
  link1Text,
  link2,
  link2Text,
  googlrePlayImg,
  appStoreImg,
  arrowIcon1,
  arrowIcon2,
}) {
  return (
    <div className="container my-5 py-5 ">
      <div className="d-flex justify-content-around align-item-center flex-wrap flex-row v-align">
        <div className=" text-center">
          <img
            src={image}
            alt="Product"
            style={{ width: "90%" }}
            className="p-auto"
          />
        </div>
        {/* <div className="col-lg-2"></div> */}
        <div className=" d-flex justify-content-center flex-column col-lg-4 col-sm-12 my-5">
          <h2>{title}</h2>
          <p className="my-4">{description}</p>
          <div className="row pb-2" >
            <a href={link1} className="col-6 text-center">
              {link1Text}
              {arrowIcon1}
            </a>
            <a href={link2} className="col-6 text-center">
              {link2Text}
              {arrowIcon2}
            </a>
          </div>
          <div className="row pb-2">
            <a href="#" className="col-6 text-center">
              <img src={googlrePlayImg}></img>
            </a>
            <a href="#" className="col-6 text-center">
              <img src={appStoreImg}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
