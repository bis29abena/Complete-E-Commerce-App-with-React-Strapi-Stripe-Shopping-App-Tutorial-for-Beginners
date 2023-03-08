import React from "react";
import {Link} from "react-router-dom"
import "./Card.scss";

const Card = ({item}) => {
  const uploadURL = process.env.REACT_APP_API_UPLOAD_URL

  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="imageContainer">
            {item.attributes?.isNew && <span>New Season</span>}
            <img src={uploadURL + item.attributes.img?.data.attributes.url} alt="" className="mainImage" />
            <img src={uploadURL + item.attributes.img2?.data.attributes.url} alt="" className="secondImage" />
        </div>
        <h2>{item.attributes.Title}</h2>
        <div className="price">
            <h3>GH₵{item.oldPrice || item.attributes.price + 20}</h3>
            <h3>GH₵{item.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
