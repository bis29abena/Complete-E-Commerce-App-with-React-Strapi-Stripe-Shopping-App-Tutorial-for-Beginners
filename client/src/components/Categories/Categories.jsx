import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/4124201/pexels-photo-4124201.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <button>
            <Link className="link" to={"/products/1"}>
              Sales
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/4611700/pexels-photo-4611700.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <button>
            <Link className="link" to={"/products/2"}>
              Men
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/999303/pexels-photo-999303.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <button>
            <Link className="link" to={"/products/3"}>
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://images.pexels.com/photos/2899937/pexels-photo-2899937.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <button>
                <Link className="link" to={"/products/4"}>
                  New Season
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <button>
                <Link className="link" to={"/products/5"}>
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <button>
            <Link className="link" to={"/products/6"}>
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
