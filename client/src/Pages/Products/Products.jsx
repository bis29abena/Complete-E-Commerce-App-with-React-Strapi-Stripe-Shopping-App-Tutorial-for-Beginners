import React, { useId, useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../Hooks/useFetch";

import "./Products.scss";

const Products = () => {
  const [maxPrice, setMaxPrice] = useState(100);
  const [selectedSubCat, setSelectedSubCat] = useState([]);
  const [sort, setSort] = useState("asc");

  const id = useId();
  const catId = parseInt(useParams().id);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );



  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    setSelectedSubCat(
      checked
        ? [...selectedSubCat, value]
        : selectedSubCat.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItems">
          <h2>Product Categories</h2>
          {error
            ? "something went wrong"
            : loading
            ? "Loading...."
            : data?.map((item) => (
                <div className="inputItem" key={item.id}>
                  <input
                    type="checkbox"
                    id={`${id}-1`}
                    value={item.id}
                    onChange={handleChange}
                  />
                  <label htmlFor={`${id}-1`}>{item.attributes.title}</label>
                </div>
              ))}
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
            <span>{ maxPrice }</span>
          </div>
        </div>
        <div className="filterItems">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input
              type="radio"
              id={`${id}-radio-1`}
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor={`${id}-radio-1`}>Price (Lowest)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id={`${id}-radio-2`}
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
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
        <List
          catId={catId}
          sort={sort}
          selectedSubCat={selectedSubCat}
          maxPrice={maxPrice}
        />
      </div>
    </div>
  );
};

export default Products;
