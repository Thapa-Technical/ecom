import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";

const Product = (curElem) => {
  const { id, name, image, price, description } = curElem;
  // console.log(curElem);
  return (
    <div className="card">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-data">
        <div className="card-data-flex">
          <h3>{name}</h3>
          <p>
            <FormatPrice price={price} />{" "}
          </p>
        </div>
        {/* <p>{description.slice(0, 100)}</p> */}
        <Button className="btn">
          <NavLink to={`/singleproduct/${id}`}>Read More</NavLink>
        </Button>
      </div>
    </div>
  );
};

export default Product;
