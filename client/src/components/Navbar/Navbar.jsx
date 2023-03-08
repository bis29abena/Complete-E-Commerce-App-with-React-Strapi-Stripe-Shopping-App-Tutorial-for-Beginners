import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import useToggle from "../../Hooks/useToggle";

import "./Navbar.scss";
import Cart from "../Cart/Cart";
import useFetch from "../../Hooks/useFetch";

const Navbar = () => {
  const [open, setOpen] = useToggle(false);

  const { data, loading, error } = useFetch("/categories");

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/assets/images/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          {error
            ? "something went wrong"
            : loading
            ? "loading"
            : data.map((item) => (
                <div className="item" key={item.id}>
                  <Link className="link" to={`/products/${item.id}`}>
                    {item.attributes?.title}
                  </Link>
                </div>
              ))}
        </div>
        <div className="center">
          <Link className="link" to="/">
            AJSTORES
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/contact">
              Contact Us
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/stores">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonIcon />
            <FavoriteIcon />
            <div className="cartIcon" onClick={setOpen}>
              <AddShoppingCartIcon />
              <span className="cartIconText">0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
