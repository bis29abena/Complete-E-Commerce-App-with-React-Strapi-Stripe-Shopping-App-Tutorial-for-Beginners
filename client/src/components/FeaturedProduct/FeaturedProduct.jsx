import React from "react";
import Card from "../Card/Card";
import "./FeaturedProduct.scss";

const FeaturedProduct = ({ type }) => {
  const data = [
    {
      id: 1,
      img1: "https://images.pexels.com/photos/1113554/pexels-photo-1113554.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/2896840/pexels-photo-2896840.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Long Sleeve Graphic T-Shirt",
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 2,
      img1: "https://images.pexels.com/photos/1750776/pexels-photo-1750776.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 3,
      img1: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Skirt",
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 4,
      img1: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Hat",
      oldPrice: 19,
      newPrice: 12,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
          aspernatur animi molestiae asperiores numquam a repellat qui cumque
          exercitationem esse sit commodi quaerat corrupti sunt eum, odio culpa
          veniam. Cum?
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => {
          return <Card item={item} key={item.id}/>;
        })}
      </div>
    </div>
  );
};

export default FeaturedProduct;
