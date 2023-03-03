import React, { useId, useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";

import "./Products.scss";

const Products = () => {
  const [maxPrice, setMaxPrice] = useState(100);

  const id = useId();
  const catId = parseInt(useParams().id);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItems">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id={`${id}-1`} value={1} />
            <label htmlFor={`${id}-1`}>Skirt</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id={`${id}-2`} value={2} />
            <label htmlFor={`${id}-2`}>Coats</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id={`${id}-3`} value={3} />
            <label htmlFor={`${id}-3`}>Shoes</label>
          </div>
        </div>
        <div className="filterItems">
          <h2>Filter By Price</h2>
          <div className="rangeFilter">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={100}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItems">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input type="radio" id={`${id}-radio-1`} value="asc" name="price" />
            <label htmlFor={`${id}-radio-1`}>Price (Lowest)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id={`${id}-radio-2`}
              value="desc"
              name="price"
            />
            <label htmlFor={`${id}-radio-2`}>Price (Highest)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <List />
      </div>
    </div>
  );
};

export default Products;
