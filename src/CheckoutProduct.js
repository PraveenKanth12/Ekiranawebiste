import React from "react";
import "./CheckoutProduct.css";
import { useStatevalue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{basket},dispatch]=useStatevalue();
    const removetheBasket=()=>{
        dispatch({
            type:"REMOVE_THE_BASKET",
            id:id,
        })
    }
  return (
    <div className="checkoutProduct">
      <img src={image} alt="cart-item" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          $<strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removetheBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
