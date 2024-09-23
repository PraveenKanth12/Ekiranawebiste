import React from "react";
import "./Checkout.css";
import Header from "./Header";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal.js";
import { useStatevalue } from "./StateProvider.js";

function Checkout() {
  const [{ basket }, dispatch] = useStatevalue();
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            src="https://www.wordstream.com/wp-content/uploads/2021/07/banner-ads-examples-ncino.jpg"
            alt="advertisement"
            className="checkout__ad"
          />
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default Checkout;
