import React from "react";
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, resetCart } from "../../redux/cartReducer";

const Cart = () => {
 const products = useSelector(state => state.cart.products)
 const dispatch = useDispatch()
 const file_path = process.env.REACT_APP_API_UPLOAD_URL;

 const totalPrice = () => {
  let total = 0

  products.forEach(element => {
    total += element.quantity * element.price 
  });

  return total.toFixed(2)
 }


  return (
    <div className="cart">
      <h1>Title</h1>
      {products?.map((item) => {
        return (
          <div className="item" key={item.id}>
            <img src={file_path + item.img} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc?.substring(0, 100)}</p>
              <div className="price">{item.quantity} x ${item.price}</div>
            </div>
            <DeleteIcon className="delete" onClick={() => dispatch(removeFromCart({id: item.id}))}/>
          </div>
        );
      })}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>Reset</span>
    </div>
  );
};

export default Cart;
