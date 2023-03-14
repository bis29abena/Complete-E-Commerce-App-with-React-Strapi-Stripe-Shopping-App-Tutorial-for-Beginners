import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./Product.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const file_path = process.env.REACT_APP_API_UPLOAD_URL;
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const [mainImage, setMainImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className="product">
      {error ? (
        "Something Happened"
      ) : loading ? (
        "Loading..."
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={file_path + data?.attributes?.img?.data?.attributes?.url}
                alt=""
                onClick={() => setMainImage("img")}
              />
              <img
                src={file_path + data?.attributes?.img2?.data?.attributes?.url}
                alt=""
                onClick={() => setMainImage("img2")}
              />
            </div>
            <div className="mainImage">
              <img
                src={
                  mainImage !== null
                    ? file_path +
                      data.attributes[mainImage]?.data?.attributes?.url
                    : file_path + data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data.attributes?.Title}</h1>
            <span className="price">$ {data.attributes?.price}</span>
            <p>{data.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() => {
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.Title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                );
                setQuantity((prev) => prev - prev + 1);
              }}
            >
              <AddShoppingCartIcon />
              ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISHLIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <div className="details">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
