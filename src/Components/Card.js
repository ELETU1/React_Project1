import React from "react";

const Card = ({title, price, image}) => {
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card">
          <img
            src={image}
            className="card-img-top"
            alt="..."
            style={{width: "300px",height: "300px", objectFit:"contain"}}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p>Price : ${price}</p>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-dark">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
