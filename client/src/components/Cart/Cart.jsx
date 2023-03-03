import React from "react";
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import "./Cart.scss";

const Cart = () => {
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro autem blanditiis beatae provident laboriosam soluta ipsam reprehenderit nesciunt laborum illum, cupiditate repellat voluptate debitis suscipit maxime, qui omnis dolor.",
      id: 1,
      img1: "https://images.pexels.com/photos/1113554/pexels-photo-1113554.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Long Sleeve Graphic T-Shirt",
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro autem blanditiis beatae provident laboriosam soluta ipsam reprehenderit nesciunt laborum illum, cupiditate repellat voluptate debitis suscipit maxime, qui omnis dolor.",
      id: 2,
      img1: "https://images.pexels.com/photos/1750776/pexels-photo-1750776.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
    },
  ];

  return (
    <div className="cart">
      <h1>Title</h1>
      {data?.map((item) => {
        return (
          <div className="item" key={item.id}>
            <img src={item.img1} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc?.substring(0, 100)}</p>
              <div className="price">1 x ${item.newPrice}</div>
            </div>
            <DeleteIcon className="delete"/>
          </div>
        );
      })}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$142</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset</span>
    </div>
  );
};

export default Cart;
