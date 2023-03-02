import React from "react";
import {Link} from "react-router-dom"
import "./Card.scss";

const Card = ({item}) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="imageContainer">
            {item.isNew && <span>New Season</span>}
            <img src={item.img1} alt="" className="mainImage" />
            <img src={item.img2} alt="" className="secondImage" />
        </div>
        <h2>{item.title}</h2>
        <div className="price">
            <h3>GH₵{item.oldPrice}</h3>
            <h3>GH₵{item.newPrice}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
