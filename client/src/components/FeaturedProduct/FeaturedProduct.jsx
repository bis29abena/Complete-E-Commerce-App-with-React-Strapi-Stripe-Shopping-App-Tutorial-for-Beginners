import React from "react";
import useFetch from "../../Hooks/useFetch";
import Card from "../Card/Card";
import "./FeaturedProduct.scss";

const FeaturedProduct = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );


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
        {error
          ? "Something Went Wrong"
          : loading
          ? "Loading..."
          : data.map((item) => {
              return <Card item={item} key={item.id} />;
            })}
      </div>
    </div>
  );
};

export default FeaturedProduct;
